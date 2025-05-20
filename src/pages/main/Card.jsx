import React from 'react';

const Card = ({ title, items }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-md text-white w-full md:w-1/3">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <ul className="text-sm space-y-1">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
