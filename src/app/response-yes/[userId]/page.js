/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import FactCard from '@/components/FactCard';

export default async function ResponseYesPage({ params }) {
  const response = await fetch(`https://not-my-first-react-app-default-rtdb.firebaseio.com/responseYes.json?orderBy="userId"&equalTo="${params.userId}"`, { cache: 'no-store' });
  const facts = await response.json();

  return (
    <>
      {Object.values(facts).map((fact, i) => (
        <FactCard key={i} fact={fact} />
      ))}
    </>
  );
}

ResponseYesPage.propTypes = {
  params: PropTypes.string.isRequired,
};
