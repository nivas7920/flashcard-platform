import React from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards }) => {
  return (
    <div className="flashcard-list">
      {flashcards.map(flashcard => (
        <Flashcard key={flashcard._id} flashcard={flashcard} />
      ))}
    </div>
  );
};

export default FlashcardList;
