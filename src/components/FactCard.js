'use client';

import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

export default function FactCard({ fact }) {
  return (
    <Card>
      <Card.Body>{fact.text}</Card.Body>
    </Card>
  );
}

FactCard.propTypes = {
  fact: PropTypes.string.isRequired,
};
