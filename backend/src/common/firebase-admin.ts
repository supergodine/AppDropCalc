import * as admin from 'firebase-admin';

// Inicializa o Firebase Admin SDK usando variáveis de ambiente.
// A chave privada costuma ser salva no .env com '\\n' literais — precisamos transformar em quebras reais.
const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
let privateKey = process.env.FIREBASE_PRIVATE_KEY || '';

if (privateKey && privateKey.includes('\\n')) {
  privateKey = privateKey.replace(/\\n/g, '\n');
}

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey,
      } as any),
    });
    console.log('[firebase-admin] Inicializado com sucesso');
  } catch (err) {
    console.error('[firebase-admin] Falha ao inicializar Firebase Admin:', err?.message || err);
  }
}

export default admin;
