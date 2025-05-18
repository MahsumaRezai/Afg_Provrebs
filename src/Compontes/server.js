const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// داده تستی اولیه
let proverbs = [
  {
    id: 1,
    textDari: "پرسیدن عیب نیست، ندانستن عیب است",
    textPashto: "پوښتنه عیب نه ده، ناپوهي عیب ده",
    translationEn: "Asking is not a shame, not knowing is.",
    meaning: "It’s okay to ask questions to learn.",
    category: "wisdom"
  }
];

let nextId = 2;

// ✅ GET همه ضرب‌المثل‌ها یا فیلتر بر اساس دسته‌بندی
app.get('/proverbs', (req, res) => {
  const { category } = req.query;
  if (category) {
    const filtered = proverbs.filter(p => p.category === category);
    return res.json(filtered);
  }
  res.json(proverbs);
});

// ✅ GET ضرب‌المثل تصادفی
app.get('/proverbs/random', (req, res) => {
  const random = proverbs[Math.floor(Math.random() * proverbs.length)];
  res.json(random);
});

// ✅ GET ضرب‌المثل تکی بر اساس ID
app.get('/proverbs/:id', (req, res) => {
  const proverb = proverbs.find(p => p.id === parseInt(req.params.id));
  proverb ? res.json(proverb) : res.status(404).json({ error: 'Not found' });
});

// ✅ POST افزودن ضرب‌المثل جدید
app.post('/proverbs', (req, res) => {
  const { textDari, textPashto, translationEn, meaning, category } = req.body;
  if (!textDari || !textPashto || !translationEn || !meaning || !category) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  const newProverb = {
    id: nextId++,
    textDari,
    textPashto,
    translationEn,
    meaning,
    category
  };
  proverbs.push(newProverb);
  res.status(201).json(newProverb);
});

// ✅ PUT ویرایش ضرب‌المثل
app.put('/proverbs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = proverbs.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });

  const { textDari, textPashto, translationEn, meaning, category } = req.body;
  if (!textDari || !textPashto || !translationEn || !meaning || !category) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  proverbs[index] = { id, textDari, textPashto, translationEn, meaning, category };
  res.json(proverbs[index]);
});

// ✅ DELETE حذف ضرب‌المثل
app.delete('/proverbs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const before = proverbs.length;
  proverbs = proverbs.filter(p => p.id !== id);
  if (proverbs.length === before) return res.status(404).json({ error: 'Not found' });
  res.status(204).send();
});

// ✅ اجرای سرور
app.listen(5000, () => console.log('✅ Server running on http://localhost:5000'));
