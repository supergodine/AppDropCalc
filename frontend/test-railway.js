// Teste de comunicação com o backend Railway
console.log('🔥 Testando comunicação com Railway...');

const testAPI = async () => {
    try {
    const response = await fetch('https://appdropcalc.onrender.com/calc/platforms');
    // const response = await fetch('https://appdropcalc-production.up.railway.app/calc/platforms'); // antigo Railway
        console.log('✅ Status:', response.status);
        
        if (response.ok) {
            const data = await response.json();
            console.log('✅ Dados recebidos:', data);
            document.body.innerHTML = `
                <h1>✅ SUCESSO!</h1>
                <p>Backend Railway respondeu corretamente!</p>
                <p>Status: ${response.status}</p>
                <p>Endpoints funcionando: /calc/platforms</p>
                <h3>Plataformas disponíveis:</h3>
                <pre>${JSON.stringify(data, null, 2)}</pre>
            `;
        } else {
            console.log('❌ Erro:', response.status, response.statusText);
            document.body.innerHTML = `
                <h1>❌ ERRO</h1>
                <p>Status: ${response.status}</p>
                <p>Erro: ${response.statusText}</p>
            `;
        }
    } catch (error) {
        console.error('❌ Erro de rede:', error);
        document.body.innerHTML = `
            <h1>❌ ERRO DE REDE</h1>
            <p>Erro: ${error.message}</p>
        `;
    }
};

testAPI();