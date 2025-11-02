import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useQuery, useMutation } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  Save,
  Sparkles 
} from 'lucide-react';

import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select, type SelectOption } from '../components/ui/Select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Loading } from '../components/ui/Loading';

import { calculationsApi, presetsApi, exchangeApi } from '../services/api';
import type { CreateCalculationDto, CalculationResult } from '../types';

// Validation schema
const calculationSchema = z.object({
  supplierCost: z.number().min(0.01, 'Custo deve ser maior que zero'),
  currency: z.string().min(1, 'Moeda é obrigatória'),
  platformId: z.string().min(1, 'Plataforma é obrigatória'),
  gatewayId: z.string().min(1, 'Gateway é obrigatório'),
  desiredMargin: z.number().min(0, 'Margem deve ser positiva').max(99, 'Margem máxima é 99%'),
  advertisingCost: z.number().min(0, 'Custo de anúncios deve ser positivo').optional(),
  shippingCost: z.number().min(0, 'Custo de frete deve ser positivo').optional(),
  additionalCosts: z.number().min(0, 'Custos adicionais devem ser positivos').optional(),
  description: z.string().optional(),
});

type CalculationFormData = z.infer<typeof calculationSchema>;

const NewCalculationPage: React.FC = () => {
  const [simulationResult, setSimulationResult] = useState<CalculationResult | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<CalculationFormData>({
    resolver: zodResolver(calculationSchema),
    defaultValues: {
      supplierCost: 0,
      currency: 'USD',
      desiredMargin: 30,
      advertisingCost: 0,
      shippingCost: 0,
      additionalCosts: 0,
    },
    mode: 'onChange',
  });

  // Watch form values for real-time simulation
  const watchedValues = watch();

  // Queries
  const { data: platforms = [], isLoading: platformsLoading } = useQuery({
    queryKey: ['platforms'],
    queryFn: presetsApi.getPlatforms,
  });

  const { data: gateways = [], isLoading: gatewaysLoading } = useQuery({
    queryKey: ['gateways'],
    queryFn: presetsApi.getGateways,
  });

  const { data: currencies = [], isLoading: currenciesLoading } = useQuery({
    queryKey: ['currencies'],
    queryFn: exchangeApi.getSupportedCurrencies,
  });

  // Mutations
  const createCalculationMutation = useMutation({
    mutationFn: calculationsApi.create,
    onSuccess: () => {
      // Show success message and redirect to history
      alert('Cálculo salvo com sucesso!');
    },
    onError: (error) => {
      console.error('Error creating calculation:', error);
      alert('Erro ao salvar cálculo. Tente novamente.');
    },
  });

  // Real-time simulation
  useEffect(() => {
    const simulateCalculation = async () => {
      if (!isValid || !watchedValues.platformId || !watchedValues.gatewayId) {
        setSimulationResult(null);
        return;
      }

      setIsSimulating(true);
      try {
        const result = await calculationsApi.simulate(watchedValues as CreateCalculationDto);
        setSimulationResult(result);
      } catch (error) {
        console.error('Simulation error:', error);
        setSimulationResult(null);
      } finally {
        setIsSimulating(false);
      }
    };

    const timeoutId = setTimeout(simulateCalculation, 500); // Debounce
    return () => clearTimeout(timeoutId);
  }, [watchedValues, isValid]);

  // Form submission
  const onSubmit = (data: CalculationFormData) => {
    createCalculationMutation.mutate(data as CreateCalculationDto);
  };

  // Options for selects
  const currencyOptions: SelectOption[] = currencies.map(currency => ({
    value: currency,
    label: currency,
  }));

  const platformOptions: SelectOption[] = platforms.map(platform => ({
    value: platform.id,
    label: `${platform.name} (${platform.feePercentage}%)`,
  }));

  const gatewayOptions: SelectOption[] = gateways.map(gateway => ({
    value: gateway.id,
    label: `${gateway.name} (${gateway.feePercentage}%)`,
  }));

  if (platformsLoading || gatewaysLoading || currenciesLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading text="Carregando dados..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            <Calculator className="inline-block mr-3 h-10 w-10 text-green-600" />
            Calculadora de Preços
          </h1>
          <p className="text-lg text-gray-600">
            Calcule o preço ideal para seus produtos de dropshipping
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Dados do Produto</CardTitle>
                <CardDescription>
                  Preencha as informações do seu produto para calcular o preço ideal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Custo e Moeda */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Custo do Fornecedor"
                      type="number"
                      step="0.01"
                      min="0"
                      startIcon={<DollarSign />}
                      error={errors.supplierCost?.message}
                      {...register('supplierCost', { valueAsNumber: true })}
                    />
                    <Select
                      label="Moeda"
                      options={currencyOptions}
                      value={watchedValues.currency}
                      onChange={(value) => setValue('currency', value)}
                      error={errors.currency?.message}
                    />
                  </div>

                  {/* Plataforma e Gateway */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select
                      label="Plataforma"
                      options={platformOptions}
                      value={watchedValues.platformId}
                      onChange={(value) => setValue('platformId', value)}
                      error={errors.platformId?.message}
                      placeholder="Selecione a plataforma"
                    />
                    <Select
                      label="Gateway de Pagamento"
                      options={gatewayOptions}
                      value={watchedValues.gatewayId}
                      onChange={(value) => setValue('gatewayId', value)}
                      error={errors.gatewayId?.message}
                      placeholder="Selecione o gateway"
                    />
                  </div>

                  {/* Margem Desejada */}
                  <Input
                    label="Margem Desejada (%)"
                    type="number"
                    min="0"
                    max="99"
                    startIcon={<TrendingUp />}
                    error={errors.desiredMargin?.message}
                    {...register('desiredMargin', { valueAsNumber: true })}
                  />

                  {/* Custos Adicionais */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Custos Adicionais (Opcional)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Input
                        label="Custo de Anúncios (R$)"
                        type="number"
                        step="0.01"
                        min="0"
                        error={errors.advertisingCost?.message}
                        {...register('advertisingCost', { valueAsNumber: true })}
                      />
                      <Input
                        label="Custo de Frete (R$)"
                        type="number"
                        step="0.01"
                        min="0"
                        error={errors.shippingCost?.message}
                        {...register('shippingCost', { valueAsNumber: true })}
                      />
                      <Input
                        label="Outros Custos (R$)"
                        type="number"
                        step="0.01"
                        min="0"
                        error={errors.additionalCosts?.message}
                        {...register('additionalCosts', { valueAsNumber: true })}
                      />
                    </div>
                  </div>

                  {/* Descrição */}
                  <Input
                    label="Descrição (Opcional)"
                    placeholder="Ex: iPhone 14 Pro Max..."
                    error={errors.description?.message}
                    {...register('description')}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    loading={createCalculationMutation.isPending}
                    disabled={!isValid || !simulationResult}
                  >
                    <Save className="w-5 h-5 mr-2" />
                    Salvar Cálculo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-yellow-500" />
                  Resultado da Simulação
                </CardTitle>
                <CardDescription>
                  Resultado em tempo real baseado nos dados inseridos
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSimulating ? (
                  <div className="flex items-center justify-center py-8">
                    <Loading text="Calculando..." />
                  </div>
                ) : simulationResult ? (
                  <div className="space-y-4">
                    {/* Preço de Venda */}
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="text-center">
                        <p className="text-sm text-green-600 font-medium">PREÇO DE VENDA</p>
                        <p className="text-3xl font-bold text-green-700">
                          R$ {simulationResult.salePrice.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Custo em BRL:</span>
                        <span className="font-medium">R$ {simulationResult.supplierCostBRL.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Taxa da Plataforma:</span>
                        <span className="font-medium">R$ {simulationResult.platformFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Taxa do Gateway:</span>
                        <span className="font-medium">R$ {simulationResult.gatewayFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600">Custos Totais:</span>
                        <span className="font-medium">R$ {simulationResult.totalCosts.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 bg-gray-50 rounded px-3">
                        <span className="text-gray-900 font-medium">Margem Final:</span>
                        <span className="font-bold text-green-600">
                          {simulationResult.finalMargin.toFixed(1)}%
                        </span>
                      </div>
                    </div>

                    {/* Exchange Rate */}
                    {simulationResult.exchangeRate && (
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-600">
                          <strong>Taxa de câmbio:</strong> 1 {watchedValues.currency} = R$ {simulationResult.exchangeRate.toFixed(4)}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Calculator className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Preencha todos os campos obrigatórios para ver o resultado</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewCalculationPage;