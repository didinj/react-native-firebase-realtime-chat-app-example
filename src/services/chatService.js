import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../config/firebase';

export async function sendMessage(text) {
  if (!text.trim()) return;

  await addDoc(collection(db, 'messages'), {
    text,
    uid: auth.currentUser.uid,
    createdAt: serverTimestamp(),
  });
}
