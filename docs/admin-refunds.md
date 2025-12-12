# Admin: Gerenciamento de Estornos e Downgrades

Resumo:
- Política atual: Manual — quando um pagamento for marcado como `refunded` ou `charged_back`, o webhook registra o evento no banco de dados mas NÃO rebaixa automaticamente o usuário.
- Administradores devem revisar pagamentos estornados e executar downgrade manual quando apropriado.

Endpoints relevantes (backend):

- Listar pagamentos por status (admin only)
  - GET /api/payments/admin/list?status=refunded
  - Headers: `Authorization: Bearer <ADMIN_TOKEN>`
  - Response: JSON array de pagamentos locais registrados (cada item contém `id`, `externalReference`, `status`, `mp_status`, `transaction_amount`, `createdAt`, ...)

- Downgrade por paymentId (admin only)
  - POST /api/payments/admin/downgrade-by-payment/:paymentId
  - Headers: `Authorization: Bearer <ADMIN_TOKEN>`
  - Body: vazio
  - Ação: o servidor extrai `userId` de `externalReference` e chama o helper para rebaixar o usuário ao plano básico. Retorna objeto com resultado.

- Downgrade por userId (admin only)
  - POST /api/users/admin/downgrade/:userId
  - Headers: `Authorization: Bearer <ADMIN_TOKEN>`
  - Body: vazio
  - Ação: rebaixa o usuário ao plano básico imediatamente.

Como usar (exemplos):

- Listar pagamentos estornados (PowerShell):

  $token = "<ADMIN_TOKEN>"; `\`
  Invoke-RestMethod -Uri "https://seu-backend.com/api/payments/admin/list?status=refunded" -Headers @{ Authorization = "Bearer $token" }

- Downgrade por paymentId (curl):

  curl -X POST "https://seu-backend.com/api/payments/admin/downgrade-by-payment/<PAYMENT_ID>" \
    -H "Authorization: Bearer <ADMIN_TOKEN>" \
    -H "Content-Type: application/json"

- Downgrade por userId (curl):

  curl -X POST "https://seu-backend.com/api/users/admin/downgrade/<USER_ID>" \
    -H "Authorization: Bearer <ADMIN_TOKEN>" \
    -H "Content-Type: application/json"

Operational playbook suggestion:
1. Receber notificação de estorno (MP) ou ser alertado pelo suporte.
2. Abrir o Admin UI: `/admin-payments.html` (ou executar a chamada GET no backend).
3. Verificar o pagamento em questão: conferir `externalReference` para identificar usuário e plano.
4. Confirmar com suporte/financeiro que o estorno foi válido.
5. Executar POST `/api/payments/admin/downgrade-by-payment/:paymentId` — isso rebaixará o usuário imediatamente.
6. Informar o usuário sobre o rebaixamento e atualizar registros internos.

Notas e segurança:
- Os endpoints são protegidos por JWT e só usuários com `role: 'admin'` podem executar as ações.
- Mantenha o token admin seguro; prefira usar credenciais de serviço com escopo restrito.
- Se preferir automação futura, há helpers no `users.service` para marcar assinaturas `past_due` e agendar downgrade — atualmente não ativados pela política manual.

Arquivo UI rápido:
- Um arquivo estático foi adicionado em `frontend/public/admin-payments.html`. Ele busca pagamentos `refunded` e permite executar downgrades via UI (usa `localStorage.accessToken` se disponível ou aceita um token manual).

Se quiser, eu:
- implemento uma versão React/roteada dessa UI integrada ao app (requer adicionar roteador / área administrativa), ou
- adiciono testes de integração para o fluxo webhook → registro → downgrade.
