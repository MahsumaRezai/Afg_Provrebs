import { useState } from 'react';
import { addProverb } from './api';

function AddProverbForm() {
  const [form, setForm] = useState({
    textDari: '',
    textPashto: '',
    translationEn: '',
    meaning: '',
    category: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = Object.values(form);
    if (fields.some(field => field.trim() === '')) {
      alert('لطفاً تمام فیلدها را پر کنید');
      return;
    }
    await addProverb(form);
    alert('ضرب‌المثل با موفقیت افزوده شد');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="textDari" onChange={(e) => setForm({...form, textDari: e.target.value})} />
      <input name="textPashto" onChange={(e) => setForm({...form, textPashto: e.target.value})} />
      <input name="translationEn" onChange={(e) => setForm({...form, translationEn: e.target.value})} />
      <input name="meaning" onChange={(e) => setForm({...form, meaning: e.target.value})} />
      <input name="category" onChange={(e) => setForm({...form, category: e.target.value})} />
      <button type="submit">ثبت ضرب‌المثل</button>
    </form>
  );
}

export default AddProverbForm;
