// Teste simples de signup usando fetch
console.log('🔄 Testando signup...');

fetch('http://localhost:3001/auth/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'massuplas@gmail.com',
    password: 'Dhiko35@',
    name: 'Diego'
  })
})
.then(async response => {
  if (response.ok) {
    const data = await response.json();
    console.log('✅ Signup bem-sucedido:');
    console.log(JSON.stringify(data, null, 2));
  } else {
    const error = await response.json();
    console.log('❌ Erro no signup:', response.status);
    console.log(JSON.stringify(error, null, 2));
  }
})
.catch(error => {
  console.log('❌ Erro de rede:', error.message);
});

// Aguardar um pouco e testar login
setTimeout(() => {
  console.log('\n🔄 Testando login...');
  
  fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: 'massuplas@gmail.com',
      password: 'Dhiko35@'
    })
  })
  .then(async response => {
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Login bem-sucedido:');
      console.log(JSON.stringify(data, null, 2));
    } else {
      const error = await response.json();
      console.log('❌ Erro no login:', response.status);
      console.log(JSON.stringify(error, null, 2));
    }
  })
  .catch(error => {
    console.log('❌ Erro de rede:', error.message);
  });
}, 2000);