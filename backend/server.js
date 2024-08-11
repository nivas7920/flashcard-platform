const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/flashcards', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });


const FlashcardSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const Flashcard = mongoose.model('Flashcard', FlashcardSchema);

app.get('/api/flashcards', async (req, res) => {
  const flashcards = await Flashcard.find();
  res.json(flashcards);
});

app.post('/api/flashcards', async (req, res) => {
  const newFlashcard = new Flashcard(req.body);
  await newFlashcard.save();
  res.json(newFlashcard);
});

app.put('/api/flashcards/:id', async (req, res) => {
  const updatedFlashcard = await Flashcard.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedFlashcard);
});

app.delete('/api/flashcards/:id', async (req, res) => {
  await Flashcard.findByIdAndDelete(req.params.id);
  res.json({ message: 'Flashcard deleted' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
