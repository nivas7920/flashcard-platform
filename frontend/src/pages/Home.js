import React, { useState, useEffect } from 'react';
import FlashcardList from '../components/FlashcardList';
import { getFlashcards } from '../services/api';

const Home = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const loadFlashcards = async () => {
      const res = await getFlashcards();
      setFlashcards(res.data);
    };
    loadFlashcards();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Flashcard Learning Tool</h1>
      <div className="w-full max-w-4xl">
        <FlashcardList flashcards={flashcards} />
      </div>
    </div>
  );
};

export default Home;
