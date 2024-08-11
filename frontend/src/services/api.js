import axios from 'axios';

const API_URL = 'http://localhost:5000/api/flashcards';

export const getFlashcards = () => axios.get(API_URL);
export const addFlashcard = (flashcard) => axios.post(API_URL, flashcard);
export const updateFlashcard = (id, flashcard) => axios.put(`${API_URL}/${id}`, flashcard);
export const deleteFlashcard = (id) => axios.delete(`${API_URL}/${id}`);
