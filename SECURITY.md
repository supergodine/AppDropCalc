# Security Policy

## Supported Versions

Versões atualmente suportadas do DropCalc com atualizações de segurança:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

A segurança do DropCalc é uma prioridade. Se você descobrir uma vulnerabilidade de segurança, siga estas diretrizes:

### 🔒 Reportar Responsavelmente

**NÃO** abra uma issue pública para vulnerabilidades de segurança.

Em vez disso:

1. **Email**: Envie um email para `security@dropcalc.com` (caso real)
2. **GitHub**: Use o recurso "Security Advisories" do GitHub (privado)
3. **Telegram**: [@dropcalc_security] (caso configurado)

### 📋 Informações Necessárias

Inclua as seguintes informações em seu relatório:

- **Tipo de vulnerabilidade** (e.g., XSS, SQL injection, CSRF)
- **Localização** do código/endpoint afetado
- **Passos para reproduzir** a vulnerabilidade
- **Impacto potencial** da vulnerabilidade
- **Sugestões** para correção (se houver)
- **Sua informação de contato** para acompanhamento

### 🕐 Processo de Resposta

1. **Confirmação**: Confirmaremos o recebimento em 24 horas
2. **Investigação**: Investigaremos e validaremos em até 5 dias úteis
3. **Correção**: Desenvolveremos uma correção em até 30 dias
4. **Divulgação**: Coordenaremos a divulgação responsável
5. **Crédito**: Daremos crédito apropriado (se desejado)

### 🏆 Reconhecimento

Manteremos um hall da fama para pesquisadores de segurança responsáveis:

- Nome do pesquisador
- Data da descoberta
- Gravidade da vulnerabilidade
- Link para perfil/empresa (opcional)

## Security Best Practices

### 🛡️ Para Desenvolvedores

**Autenticação & Autorização**
- JWT com expiração adequada (7 dias)
- Refresh tokens rotativos
- Rate limiting em endpoints sensíveis
- Validação rigorosa de permissões

**Validação de Dados**
- Sanitização de todas as entradas
- Validação de tipos com class-validator
- Proteção contra SQL injection
- Escape de dados em responses

**Criptografia**
- HTTPS obrigatório em produção
- Senhas hasheadas com bcrypt (salt rounds: 12)
- Secrets em variáveis de ambiente
- Headers de segurança configurados

**API Security**
- CORS configurado adequadamente
- Rate limiting por IP/usuário
- Logs de auditoria para ações sensíveis
- Timeout apropriado para requests

### 🔐 Para Administradores

**Infraestrutura**
- Docker containers não privilegiados
- Firewall configurado (apenas portas necessárias)
- Updates regulares do sistema
- Backups criptografados

**Banco de Dados**
- Conexões TLS/SSL
- Usuário com privilégios mínimos
- Backups regulares testados
- Logs de auditoria habilitados

**Monitoramento**
- Logs de segurança centralizados
- Alertas para tentativas de intrusão
- Métricas de performance
- Health checks regulares

### 🌐 Para Usuários

**Senhas**
- Use senhas fortes e únicas
- Ative 2FA quando disponível
- Não compartilhe credenciais
- Logout após uso em computadores públicos

**Dados**
- Mantenha informações sensíveis privadas
- Revise permissões de aplicações conectadas
- Reporte atividades suspeitas
- Use conexões seguras (HTTPS)

## Known Security Considerations

### Terceiros
- **APIs de Câmbio**: Usamos apenas provedores confiáveis com HTTPS
- **OAuth Google**: Implementação seguindo best practices
- **Dependências**: Auditoria regular com `npm audit`

### Dados Sensíveis
- **Senhas**: Nunca armazenadas em texto plano
- **Tokens**: Rotação automática e expiração
- **PII**: Minimização de coleta de dados pessoais
- **Logs**: Não logamos informações sensíveis

### Rate Limiting
```typescript
// Exemplo de configuração
@Throttle(10, 60) // 10 requests por minuto
@Post('login')
async login() {
  // ...
}
```

### Validação de Entrada
```typescript
// Exemplo de DTO seguro
export class CreateCalculationDto {
  @IsNumber()
  @Min(0)
  @Max(999999)
  supplierCost: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(3)
  currency: string;
}
```

## Security Headers

O DropCalc implementa os seguintes headers de segurança:

```nginx
# Nginx configuration
add_header X-Frame-Options DENY;
add_header X-Content-Type-Options nosniff;
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy strict-origin-when-cross-origin;
add_header Content-Security-Policy "default-src 'self'";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
```

## Incident Response

Em caso de incident de segurança:

1. **Contenção**: Isolar o problema imediatamente
2. **Comunicação**: Notificar usuários afetados em 72 horas
3. **Investigação**: Análise completa do ocorrido
4. **Correção**: Implementar fixes necessários
5. **Prevenção**: Atualizar processos e controles
6. **Relatório**: Documentar lições aprendidas

## Compliance

O DropCalc segue as seguintes práticas de compliance:

- **LGPD**: Lei Geral de Proteção de Dados Pessoais
- **OWASP Top 10**: Proteção contra vulnerabilidades comuns
- **Security by Design**: Segurança desde o desenvolvimento
- **Principle of Least Privilege**: Permissões mínimas necessárias

## Contact

Para questões de segurança:

- **Email**: security@dropcalc.com
- **PGP Key**: [Link para chave pública]
- **Response Time**: 24 horas para acknowled ment

---

**Última atualização**: Janeiro 2024

Obrigado por ajudar a manter o DropCalc seguro! 🔒