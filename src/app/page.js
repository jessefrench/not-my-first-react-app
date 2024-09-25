'use client';

import { useAuth } from '@/utils/context/authContext';
import { useState, useEffect } from 'react';

export default function Home() {
  const [uselessFact, setUselessFact] = useState({});
  const { user } = useAuth();

  const fetchFact = async () => {
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
    const fact = await response.json();
    setUselessFact(fact);
  };

  const selectResponse = (boolean) => {
    const obj = {
      userId: user.uid,
      permalink: uselessFact.permalink,
      response: boolean,
    };
    fetchFact();
    return obj;
  };

  useEffect(() => {
    fetchFact();
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
