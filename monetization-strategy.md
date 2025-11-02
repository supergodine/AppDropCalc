# 💰 Sistema de Monetização - DropCalc

## 🎯 **Modelo Freemium**

### **PLANO GRATUITO** 💚
**R$ 0,00/mês**
- ✅ 10 cálculos por mês
- ✅ Calculadora básica de preços
- ✅ Conversão de moeda (USD, EUR, BRL)
- ✅ Cálculo de margem simples
- ✅ Suporte por email
- ❌ Histórico limitado (últimos 3 cálculos)
- ❌ Sem relatórios
- ❌ Anúncios discretos

### **PLANO GOLD** 🥇
**R$ 9,90/mês**
- ✅ **Cálculos ilimitados**
- ✅ **Todas as moedas disponíveis**
- ✅ **Histórico completo de cálculos**
- ✅ **Taxas das principais plataformas**
- ✅ **Gateways de pagamento**
- ✅ **Sem anúncios**
- ✅ **Suporte prioritário**
- ✅ **Salvar cálculos favoritos**

### **PLANO PREMIUM** 💎
**R$ 19,90/mês**
- ✅ **Tudo do Gold +**
- ✅ **Calculadora avançada de lucro**
- ✅ **Análise de competitividade**
- ✅ **Alertas de mudança de câmbio**
- ✅ **Exportar relatórios em PDF**
- ✅ **Suporte WhatsApp**
- ✅ **Consultoria por email**
- ✅ **Acesso antecipado a funcionalidades**

## 🔒 **Sistema de Limitações**

### **Implementação no Backend:**

```typescript
// src/modules/billing/billing.service.ts
@Injectable()
export class BillingService {
  
  async checkCalculationLimit(userId: string): Promise<boolean> {
    const user = await this.userService.findById(userId);
    
    if (user.plan === UserPlan.GOLD || user.plan === UserPlan.PREMIUM) {
      return true; // Ilimitado
    }
    
    // Plano gratuito: 10 cálculos por mês
    const currentMonth = new Date().getMonth();
    const calculationsThisMonth = await this.calculationService.countByUserAndMonth(
      userId, 
      currentMonth
    );
    
    return calculationsThisMonth < 10;
  }
  
  async upgradeUser(userId: string, plan: UserPlan, paymentId: string) {
    // Lógica de upgrade do usuário
    await this.userService.updatePlan(userId, plan);
    await this.paymentService.confirmPayment(paymentId);
    
    // Disparar eventos
    this.eventEmitter.emit('user.upgraded', { userId, plan });
  }
}
```

### **Middleware de Limitação:**

```typescript
// src/common/guards/billing.guard.ts
@Injectable()
export class BillingGuard implements CanActivate {
  
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = request.user.id;
    
    const hasLimit = await this.billingService.checkCalculationLimit(userId);
    
    if (!hasLimit) {
      throw new HttpException({
        message: 'Limite de cálculos atingido',
        upgrade: true,
        plan: 'gold'
      }, HttpStatus.PAYMENT_REQUIRED);
    }
    
    return true;
  }
}
```

## 💳 **Integração com Pagamentos**

### **Stripe Integration:**

```typescript
// src/modules/payments/stripe.service.ts
@Injectable()
export class StripeService {
  private stripe: Stripe;
  
  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  }
  
  async createSubscription(userId: string, priceId: string) {
    const user = await this.userService.findById(userId);
    
    // Criar customer no Stripe se não existir
    let customerId = user.stripeCustomerId;
    if (!customerId) {
      const customer = await this.stripe.customers.create({
        email: user.email,
        name: user.name,
        metadata: { userId }
      });
      customerId = customer.id;
      await this.userService.updateStripeCustomerId(userId, customerId);
    }
    
    // Criar subscription
    const subscription = await this.stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent'],
    });
    
    return {
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret
    };
  }
}
```

### **Preços Stripe:**

```javascript
// Configuração dos preços no Stripe Dashboard
const STRIPE_PRICES = {
  GOLD_MONTHLY: 'price_gold_monthly_990',      // R$ 9,90
  GOLD_YEARLY: 'price_gold_yearly_9900',       // R$ 99,00 (2 meses grátis)
  PREMIUM_MONTHLY: 'price_premium_monthly_1990', // R$ 19,90
  PREMIUM_YEARLY: 'price_premium_yearly_19900'   // R$ 199,00 (2 meses grátis)
};
```

## 📊 **Analytics e Tracking**

### **Google Analytics 4:**

```typescript
// src/modules/analytics/analytics.service.ts
@Injectable()
export class AnalyticsService {
  
  async trackCalculation(userId: string, calculationType: string) {
    // Enviar evento para GA4
    await this.ga4.trackEvent('calculation_performed', {
      user_id: userId,
      calculation_type: calculationType,
      plan: await this.getUserPlan(userId)
    });
  }
  
  async trackUpgrade(userId: string, fromPlan: string, toPlan: string, amount: number) {
    // Evento de conversion
    await this.ga4.trackPurchase({
      transaction_id: `upgrade_${userId}_${Date.now()}`,
      value: amount,
      currency: 'BRL',
      items: [{
        item_id: toPlan,
        item_name: `DropCalc ${toPlan}`,
        category: 'subscription',
        quantity: 1,
        price: amount
      }]
    });
  }
}
```

### **Métricas Importantes:**

```typescript
// Dashboard de métricas
const METRICS = {
  // Conversão
  FREE_TO_GOLD_RATE: 'Taxa de conversão Gratuito → Gold',
  GOLD_TO_PREMIUM_RATE: 'Taxa de upgrade Gold → Premium',
  
  // Retenção
  MONTHLY_CHURN_RATE: 'Taxa de cancelamento mensal',
  CUSTOMER_LIFETIME_VALUE: 'Valor vitalício do cliente',
  
  // Uso
  CALCULATIONS_PER_USER: 'Cálculos por usuário/mês',
  FEATURE_ADOPTION_RATE: 'Taxa de adoção de funcionalidades',
  
  // Financeiro
  MONTHLY_RECURRING_REVENUE: 'Receita recorrente mensal',
  AVERAGE_REVENUE_PER_USER: 'Receita média por usuário'
};
```

## 🎁 **Estratégias de Conversão**

### **1. Trial Gratuito Estendido:**
```typescript
// Oferecer 15 dias de Gold gratuitamente
async offerExtendedTrial(userId: string) {
  await this.userService.updatePlan(userId, UserPlan.GOLD);
  await this.scheduleDowngrade(userId, 15); // 15 dias
  
  // Email de boas-vindas
  await this.emailService.sendTrialWelcome(userId);
}
```

### **2. Desconto por Limitação:**
```typescript
// Quando usuário atinge limite, oferece desconto
async offerUpgradeDiscount(userId: string) {
  const discount = await this.createDiscountCoupon('UPGRADE50', 50); // 50% off
  
  return {
    message: 'Limite atingido! Upgrade com 50% de desconto',
    discount_code: discount.code,
    valid_until: discount.expires_at
  };
}
```

### **3. Gamificação:**
```typescript
// Sistema de conquistas
const ACHIEVEMENTS = {
  FIRST_CALCULATION: { reward: '3 dias Gold grátis' },
  TEN_CALCULATIONS: { reward: '7 dias Gold grátis' },
  SHARE_APP: { reward: '1 mês Gold grátis' },
  REFER_FRIEND: { reward: '1 mês Premium grátis' }
};
```

## 📱 **In-App Purchases (Google Play)**

### **Produtos para Android:**

```xml
<!-- res/values/products.xml -->
<resources>
    <string name="gold_monthly">gold_monthly</string>
    <string name="gold_yearly">gold_yearly</string>
    <string name="premium_monthly">premium_monthly</string>
    <string name="premium_yearly">premium_yearly</string>
    <string name="remove_ads">remove_ads</string>
</resources>
```

### **Configuração Google Play:**

```javascript
// Produtos na Play Console
const PLAY_PRODUCTS = {
  'gold_monthly': {
    type: 'subscription',
    price: 'R$ 9,90',
    period: 'monthly'
  },
  'gold_yearly': {
    type: 'subscription', 
    price: 'R$ 99,00',
    period: 'yearly'
  },
  'premium_monthly': {
    type: 'subscription',
    price: 'R$ 19,90',
    period: 'monthly'
  },
  'premium_yearly': {
    type: 'subscription',
    price: 'R$ 199,00',
    period: 'yearly'
  },
  'remove_ads': {
    type: 'one-time',
    price: 'R$ 4,90'
  }
};
```

## 📈 **Projeção de Receita**

### **Cenário Conservador:**
```
Mês 1:    100 usuários →  5 Gold = R$ 49,50
Mês 3:    500 usuários → 25 Gold + 3 Premium = R$ 307,20  
Mês 6:  1.000 usuários → 60 Gold + 10 Premium = R$ 793,00
Mês 12: 2.500 usuários → 150 Gold + 30 Premium = R$ 2.082,00
```

### **Cenário Otimista:**
```
Mês 1:    200 usuários → 15 Gold + 2 Premium = R$ 188,30
Mês 3:  1.000 usuários → 80 Gold + 15 Premium = R$ 1.090,50
Mês 6:  3.000 usuários → 200 Gold + 50 Premium = R$ 2.975,00
Mês 12: 8.000 usuários → 600 Gold + 150 Premium = R$ 8.925,00
```

### **Custo por Aquisição (CAC):**
```
Google Ads: R$ 5-15 por usuário
Facebook Ads: R$ 3-10 por usuário
Influenciadores: R$ 8-20 por usuário
SEO/Orgânico: R$ 0,50-2 por usuário
```

## 🚀 **Próximos Passos:**

1. **Implementar sistema de billing no backend**
2. **Integrar Stripe para pagamentos**
3. **Configurar Google Play Billing**
4. **Setup analytics e tracking**
5. **Criar dashboard de métricas**
6. **Implementar estratégias de conversão**
7. **Configurar campanhas de marketing**

## 💡 **Dicas de Otimização:**

- **A/B Test** preços e features
- **Onboarding** focado em value proposition
- **Push notifications** estratégicas
- **Email marketing** de retenção
- **Suporte proativo** para conversão
- **Feedback loop** contínuo com usuários