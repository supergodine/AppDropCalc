# DropCalc - Changelog

Todas as mudanças importantes deste projeto serão documentadas neste arquivo.

## [1.0.0] - 2024-01-XX (Em Desenvolvimento)

### 🎉 Funcionalidades Principais

#### Backend
- **Sistema de Autenticação**
  - JWT com refresh tokens
  - OAuth Google integrado
  - Middleware de autorização
  - Guards para proteção de rotas

- **Cálculo de Preços**
  - Fórmula: `PreçoVenda = CustoTotal / (1 - (Taxas% + MargemDesejada% + Ads%))`
  - Cálculo automático de margem de lucro
  - Conversão de moedas em tempo real
  - Fallback para múltiplas APIs de câmbio

- **Sistema de Presets**
  - Plataformas brasileiras pré-configuradas
  - Gateways de pagamento nacionais
  - Taxas atualizadas do mercado

- **APIs de Câmbio**
  - OpenExchangeRates (principal)
  - ExchangeRate-API (fallback)
  - European Central Bank (EUR fallback)
  - Cache inteligente para reduzir requisições

#### Frontend
- **Interface Moderna**
  - React 18 com TypeScript
  - Tailwind CSS para estilização
  - Framer Motion para animações
  - Design responsivo

- **Experiência do Usuário**
  - Simulação em tempo real
  - Interface intuitiva
  - Tema brasileiro customizado
  - PWA ready

#### Infraestrutura
- **Docker**
  - Multi-stage builds otimizados
  - Nginx para serving de produção
  - Health checks configurados
  - Volume persistence

- **Banco de Dados**
  - PostgreSQL com TypeORM
  - Migrations automáticas
  - Seeds para dados iniciais
  - Relacionamentos otimizados

### 🔧 Configurações

#### Presets Brasileiros Inclusos
- **Marketplaces**
  - Mercado Livre: 16% de taxa
  - Amazon Brasil: 15% de taxa
  - Magalu: 10-18% de taxa
  - Shopee: 10% de taxa

- **E-commerces**
  - Nuvemshop: 2.0% de taxa
  - Shopify: 2.9% + R$ 1,20 por transação
  - WooCommerce: sem taxa (apenas gateway)
  - Vtex: 3.5% de taxa

- **Gateways de Pagamento**
  - Mercado Pago: 4.99% para cartão
  - PagSeguro: 4.99% para cartão
  - PayPal: 6.4% + R$ 0,60
  - Stripe: 3.4% + R$ 0,60

### 📊 Métricas de Performance

- **Backend**
  - Tempo de resposta < 200ms
  - Rate limiting configurado
  - Validação de dados robusta
  - Error handling completo

- **Frontend**
  - Bundle size otimizado
  - Lazy loading implementado
  - Caching estratégico
  - SEO friendly

### 🚀 Deployment

- **Docker Compose**
  - Setup de desenvolvimento
  - Configuração de produção
  - Variáveis de ambiente
  - Documentação completa

- **Nginx**
  - SPA routing configurado
  - Proxy para API
  - Compressão gzip
  - Headers de segurança

### 📖 Documentação

- **README.md**: Visão geral e quick start
- **INSTALL.md**: Guia completo de instalação
- **ENV_EXAMPLE.md**: Configuração de ambiente
- **API Documentation**: Swagger integrado
- **Arquitetura**: Diagramas e explicações

### 🔮 Próximas Versões

#### [1.1.0] - Planejado
- [ ] Dashboard com analytics
- [ ] Exportação de relatórios
- [ ] Integração com planilhas
- [ ] API webhooks

#### [1.2.0] - Planejado
- [ ] App mobile React Native
- [ ] Notificações push
- [ ] Sincronização offline
- [ ] Múltiplos usuários por conta

#### [2.0.0] - Futuro
- [ ] IA para previsão de preços
- [ ] Integração com fornecedores
- [ ] Marketplace de produtos
- [ ] Sistema de afiliados

---

## Formato

Este changelog segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/) e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

### Tipos de Mudanças
- **Added**: Novas funcionalidades
- **Changed**: Mudanças em funcionalidades existentes
- **Deprecated**: Funcionalidades que serão removidas
- **Removed**: Funcionalidades removidas
- **Fixed**: Correções de bugs
- **Security**: Correções de segurança