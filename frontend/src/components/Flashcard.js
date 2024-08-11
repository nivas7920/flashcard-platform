import React, { useState } from 'react';

const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`w-full p-4 bg-white rounded-lg shadow-md transform transition-transform duration-500 ${flip ? 'rotate-y-180' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="text-center text-xl font-semibold">
        {flip ? flashcard.answer : flashcard.question}
      </div>
    </div>
  );
};

export default Flashcard;
