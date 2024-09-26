'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { readFacts } from '../../../api/facts';
import FactCard from '../../../components/FactCard';

export default function ResponsePage({ params, searchParams }) {
  const [facts, setFacts] = useState([]);

  const getFacts = () => {
    readFacts(params.userId, searchParams.value).then(setFacts);
  };

  useEffect(() => {
    getFacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {Object.values(facts).map((fact) => (
        <FactCard key={fact.firebaseKey} fact={fact} deleteFunc={getFacts} />
      ))}
    </div>
  );
}

ResponsePage.propTypes = {
  params: PropTypes.string.isRequired,
  searchParams: PropTypes.string.isRequired,
};
