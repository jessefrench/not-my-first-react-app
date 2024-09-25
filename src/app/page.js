'use client';

import { useAuth } from '@/utils/context/authContext';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [uselessFact, setUselessFact] = useState({});
  const { user } = useAuth();
  const initialFetch = useRef(false);
  const dbUrl = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

  const fetchFact = async () => {
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
    const fact = await response.json();
    setUselessFact(fact);
  };

  const selectResponse = async (boolean) => {
    const val = boolean ? 'Yes' : 'No';
    const obj = {
      userId: user.uid,
      text: uselessFact.text,
    };

    await fetch(`${dbUrl}/response${val}.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });

    fetchFact();
    return obj;
  };

  useEffect(() => {
    if (!initialFetch.current) {
      fetchFact();
      initialFetch.current = true;
    }
  }, []);

  return (
    <div>
      <h4>Did you know?</h4>
      <p>{uselessFact.text}</p>
      <button className="btn btn-success" type="button" onClick={() => selectResponse(true)}>
        YES
      </button>
      <button className="btn btn-danger" type="button" onClick={() => selectResponse(false)}>
        NO
      </button>
    </div>
  );
}
