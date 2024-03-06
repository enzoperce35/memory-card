import React from 'react';

export default function Card({ card }) {
  return (
    <div>
      <span>
        {card.image}
      </span>

      <p className="card-name">
        {card.name.replaceAll('_', ' ')}
      </p>
    </div>
  );
}
