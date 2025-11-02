# Contributing to DropCalc

Obrigado por considerar contribuir com o DropCalc! 🚀

## 📋 Sumário

- [Como Contribuir](#como-contribuir)
- [Reportando Bugs](#reportando-bugs)
- [Sugerindo Funcionalidades](#sugerindo-funcionalidades)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Padrões de Código](#padrões-de-código)
- [Processo de Pull Request](#processo-de-pull-request)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Como Contribuir

Existem várias maneiras de contribuir com o DropCalc:

1. **Reportar bugs** 🐛
2. **Sugerir novas funcionalidades** 💡
3. **Melhorar a documentação** 📚
4. **Escrever código** 💻
5. **Testar e dar feedback** 🧪

## Reportando Bugs

Antes de reportar um bug, verifique se ele já não foi reportado nas [Issues](https://github.com/seu-usuario/dropcalc/issues).

### Template de Bug Report

```markdown
**Descrição do Bug**
Descrição clara e concisa do bug.

**Como Reproduzir**
1. Vá para '...'
2. Clique em '....'
3. Role até '....'
4. Veja o erro

**Comportamento Esperado**
Descrição clara do que deveria acontecer.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente:**
- OS: [e.g. Windows 10, macOS, Ubuntu]
- Browser: [e.g. Chrome 96, Firefox 95]
- Versão do DropCalc: [e.g. 1.0.0]

**Contexto Adicional**
Qualquer outra informação relevante.
```

## Sugerindo Funcionalidades

Para sugerir uma nova funcionalidade, abra uma Issue com o template:

### Template de Feature Request

```markdown
**Descrição da Funcionalidade**
Descrição clara da funcionalidade sugerida.

**Problema que Resolve**
Que problema esta funcionalidade resolveria?

**Solução Proposta**
Como você imagina que esta funcionalidade funcionaria?

**Alternativas Consideradas**
Outras soluções que você considerou?

**Contexto Adicional**
Screenshots, mockups, referências, etc.
```

## Configuração do Ambiente

### Pré-requisitos

- Node.js 18+
- PostgreSQL 14+
- Docker (opcional)
- Git

### Setup Local

```bash
# 1. Fork e clone o repositório
git clone https://github.com/seu-usuario/dropcalc.git
cd dropcalc

# 2. Configure as variáveis de ambiente
cp ENV_EXAMPLE.md .env
# Edite o .env com suas configurações

# 3. Backend
cd backend
npm install
npm run build
npm run migration:run
npm run seed:run
npm run start:dev

# 4. Frontend (em outro terminal)
cd frontend
npm install
npm run dev
```

### Com Docker

```bash
# Setup completo com Docker
docker-compose up -d
```

## Padrões de Código

### Backend (NestJS)

```typescript
// ✅ Bom
@Injectable()
export class PricingService {
  constructor(
    private readonly exchangeService: ExchangeService,
  ) {}

  async calculateSalePrice(dto: CreateCalculationDto): Promise<number> {
    // Lógica clara e documentada
    const totalCost = await this.calculateTotalCost(dto);
    const totalTaxes = this.calculateTotalTaxes(dto);
    
    return totalCost / (1 - totalTaxes);
  }
}
```

### Frontend (React)

```tsx
// ✅ Bom
interface CalculationFormProps {
  onSubmit: (data: CalculationData) => void;
  isLoading?: boolean;
}

export const CalculationForm: React.FC<CalculationFormProps> = ({
  onSubmit,
  isLoading = false,
}) => {
  // Componente funcional com TypeScript
  return (
    <form onSubmit={handleSubmit}>
      {/* JSX limpo e semântico */}
    </form>
  );
};
```

### Regras Gerais

1. **TypeScript**: Use tipos explícitos sempre
2. **ESLint/Prettier**: Configure no seu editor
3. **Commits**: Use Conventional Commits
4. **Testes**: Escreva testes para novas funcionalidades
5. **Documentação**: Comente código complexo

### Conventional Commits

```bash
# Tipos permitidos
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação
refactor: refatoração
test: testes
chore: manutenção

# Exemplos
feat(pricing): adicionar cálculo de frete
fix(auth): corrigir refresh token
docs(readme): atualizar instruções de instalação
```

## Processo de Pull Request

### Antes de Abrir o PR

1. **Fork** o repositório
2. **Crie uma branch** descritiva:
   ```bash
   git checkout -b feat/adicionar-calculo-frete
   ```
3. **Faça commits** pequenos e descritivos
4. **Teste** suas mudanças localmente
5. **Atualize** documentação se necessário

### Checklist do PR

- [ ] Código segue os padrões estabelecidos
- [ ] Testes passando (se aplicável)
- [ ] Documentação atualizada
- [ ] Commit messages seguem Conventional Commits
- [ ] PR tem título e descrição claros
- [ ] Screenshots/GIFs para mudanças visuais

### Template de PR

```markdown
## Descrição
Breve descrição das mudanças.

## Tipo de Mudança
- [ ] Bug fix
- [ ] Nova funcionalidade
- [ ] Mudança que quebra compatibilidade
- [ ] Atualização de documentação

## Como Testar
1. Passo 1
2. Passo 2
3. Passo 3

## Screenshots
(Se aplicável)

## Checklist
- [ ] Meu código segue os padrões do projeto
- [ ] Realizei uma auto-revisão do código
- [ ] Comentei partes complexas do código
- [ ] Atualizei a documentação
- [ ] Meus commits seguem as convenções
```

## Estrutura do Projeto

### Backend
```
backend/
├── src/
│   ├── auth/          # Autenticação e autorização
│   ├── calculations/  # Lógica de cálculos
│   ├── common/        # Utilitários e guards
│   ├── database/      # Configuração do banco
│   ├── exchange/      # APIs de câmbio
│   ├── presets/       # Plataformas e gateways
│   └── users/         # Gestão de usuários
├── migrations/        # Migrações do banco
└── seeds/            # Dados iniciais
```

### Frontend
```
frontend/
├── src/
│   ├── components/    # Componentes reutilizáveis
│   ├── pages/        # Páginas da aplicação
│   ├── hooks/        # Custom hooks
│   ├── services/     # Chamadas de API
│   ├── types/        # Tipos TypeScript
│   └── utils/        # Utilitários
├── public/           # Arquivos estáticos
└── tests/           # Testes
```

## Desenvolvimento de Funcionalidades

### Fluxo Recomendado

1. **Issue First**: Sempre crie ou comente em uma issue
2. **Branch Feature**: Crie uma branch para a funcionalidade
3. **Small Commits**: Commits pequenos e frequentes
4. **Test Early**: Teste durante o desenvolvimento
5. **Document**: Atualize documentação se necessário
6. **Review**: Auto-review antes do PR

### Padrões de Naming

```bash
# Branches
feat/nome-da-funcionalidade
fix/nome-do-bug
docs/area-da-documentacao
refactor/area-refatorada

# Files
PascalCase para componentes: UserProfile.tsx
camelCase para services: authService.ts
kebab-case para assets: user-avatar.png
```

## Testando

### Backend
```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Coverage
npm run test:cov
```

### Frontend
```bash
# Testes unitários
npm run test

# Testes de componentes
npm run test:components

# Testes e2e
npm run test:e2e
```

## Perguntas?

- **Discord**: [Link do Discord]
- **Issues**: Para dúvidas técnicas
- **Email**: [email@exemplo.com]

---

**Obrigado por contribuir! 🙏**

Cada contribuição, por menor que seja, faz diferença na construção de uma ferramenta melhor para a comunidade de dropshipping brasileira.