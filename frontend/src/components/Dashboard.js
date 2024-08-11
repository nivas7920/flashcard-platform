import React, { useState, useEffect } from 'react';
import { getFlashcards, addFlashcard, updateFlashcard, deleteFlashcard } from '../services/api';

const Dashboard = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [form, setForm] = useState({ question: '', answer: '' });

  useEffect(() => {
    loadFlashcards();
  }, []);

  const loadFlashcards = async () => {
    const res = await getFlashcards();
    setFlashcards(res.data);
  };

  const handleAddFlashcard = async () => {
    await addFlashcard(form);
    loadFlashcards();
    setForm({ question: '', answer: '' });
  };

  const handleUpdateFlashcard = async (id) => {
    await updateFlashcard(id, form);
    loadFlashcards();
  };

  const handleDeleteFlashcard = async (id) => {
    await deleteFlashcard(id);
    loadFlashcards();
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Manage Flashcards</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Question"
          value={form.question}
          onChange={(e) => setForm({ ...form, question: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Answer"
          value={form.answer}
          onChange={(e) => setForm({ ...form, answer: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <button
          onClick={handleAddFlashcard}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Add Flashcard
        </button>
      </div>

      <div>
        {flashcards.map(flashcard => (
          <div key={flashcard._id} className="p-2 border-b">
            <p className="font-semibold">{flashcard.question}</p>
            <p className="text-gray-600">{flashcard.answer}</p>
            <div className="flex mt-2">
              <button
                onClick={() => handleUpdateFlashcard(flashcard._id)}
                className="mr-2 bg-yellow-500 text-white p-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteFlashcard(flashcard._id)}
                className="bg-red-500 text-white p-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
