import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';

export default function useMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('createdAt', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(data);
    });

    return unsubscribe;
  }, []);

  return messages;
}
