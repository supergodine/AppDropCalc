import { getFirestore, doc, setDoc } from 'firebase/firestore';
import app from '../firebase';

const db = getFirestore(app);

export async function saveUserPlanToFirestore({
  userId,
  planId,
  period,
  startDate,
  expirationDate
}: {
  userId: string;
  planId: string;
  period: 'monthly' | 'quarterly' | 'annual';
  startDate: string;
  expirationDate: string;
}) {
  try {
    await setDoc(doc(db, 'userPlans', userId), {
      planId,
      period,
      startDate,
      expirationDate,
      updatedAt: new Date().toISOString()
    });
    return true;
  } catch (error) {
    console.error('Erro ao salvar plano no Firestore:', error);
    return false;
  }
}
