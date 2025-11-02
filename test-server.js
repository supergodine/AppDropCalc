// Teste simples para verificar se o servidor está respondendo
console.log('🔄 Testando servidor...');

fetch('http://localhost:3001')
.then(async response => {
  console.log('Status:', response.status);
  console.log('Headers:', [...response.headers.entries()]);
  
  const text = await response.text();
  console.log('Body:', text);
})
.catch(error => {
  console.log('❌ Erro:', error.message);
});