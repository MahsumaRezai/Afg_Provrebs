import { useState } from 'react';
import './List.css';

const List = () => {
    const [proverbs, setProverbs] = useState([
        {
            textDari: "پرسیدن عیب نیست، ندانستن عیب است",
            textPashto: "پوښتنه عیب نه ده، ناپوهي عیب ده",
            translationEn: "Asking is not a shame, not knowing is."
        }
    ]);

    const [inputDari, setInputDari] = useState('');
    const [inputPashto, setInputPashto] = useState('');
    const [inputEnglish, setInputEnglish] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [language, setLanguage] = useState('dari');

    // ✅ برچسب‌های زبان‌ها
    const labels = {
        dari: {
            currentLanguage: 'دری',
            switchLanguage: 'تغییر زبان',
            edit: 'ویرایش',
            delete: 'پاک نمودن',
            add: 'اضافه نمودن ضرب‌المثل',
            save: 'ذخیره ویرایش',
            inputDari: 'متن به دری',
            inputPashto: 'متن به پشتو',
            inputEnglish: 'ترجمه انگلیسی'
        },
        pashto: {
            currentLanguage: 'پشتو',
            switchLanguage: 'ژبه بدله کړئ',
            edit: 'سمون',
            delete: 'ړنګول',
            add: 'متل زیات کړئ',
            save: 'سمون ذخیره کړئ',
            inputDari: 'په دري کې',
            inputPashto: 'په پښتو کې',
            inputEnglish: 'په انګلیسي کې ژباړه'
        },
        en: {
            currentLanguage: 'English',
            switchLanguage: 'Switch Language',
            edit: 'Edit',
            delete: 'Delete',
            add: 'Add Proverb',
            save: 'Save Edit',
            inputDari: 'Text in Dari',
            inputPashto: 'Text in Pashto',
            inputEnglish: 'Translation in English'
        }
    };

    const handleAdd = () => {
        if (inputDari.trim() && inputPashto.trim() && inputEnglish.trim()) {
            const newProverb = {
                textDari: inputDari,
                textPashto: inputPashto,
                translationEn: inputEnglish
            };
            setProverbs([...proverbs, newProverb]);
            setInputDari('');
            setInputPashto('');
            setInputEnglish('');
        }
    };

    const handleDelete = (index) => {
        const updated = proverbs.filter((_, i) => i !== index);
        setProverbs(updated);
    };

    const handleEdit = (index) => {
        const p = proverbs[index];
        setInputDari(p.textDari);
        setInputPashto(p.textPashto);
        setInputEnglish(p.translationEn);
        setEditIndex(index);
        setIsEditing(true);
    };

    const handleSaveEdit = () => {
        const updated = [...proverbs];
        updated[editIndex] = {
            textDari: inputDari,
            textPashto: inputPashto,
            translationEn: inputEnglish
        };
        setProverbs(updated);
        setIsEditing(false);
        setEditIndex(null);
        setInputDari('');
        setInputPashto('');
        setInputEnglish('');
    };

    const toggleLanguage = () => {
        if (language === 'dari') setLanguage('pashto');
        else if (language === 'pashto') setLanguage('en');
        else setLanguage('dari');
    };

    const getText = (p) => {
        if (language === 'dari') return p.textDari;
        if (language === 'pashto') return p.textPashto;
        return p.translationEn;
    };

    const lang = labels[language];

    return (
        <div className="list">
            <h2> {lang.currentLanguage}</h2>
            <button onClick={toggleLanguage} className="switch-lang">{lang.switchLanguage}</button>

            <ul>
                {proverbs.map((p, index) => (
                    <li key={index}>
                        {getText(p)}
                        <div className="btn">
                            <button onClick={() => handleEdit(index)} className="edit">{lang.edit}</button>
                            <button onClick={() => handleDelete(index)} className="delete">{lang.delete}</button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="btn">
                <input
                    type="text"
                    placeholder={lang.inputDari}
                    value={inputDari}
                    onChange={(e) => setInputDari(e.target.value)}
                />
                <input
                    type="text"
                    placeholder={lang.inputPashto}
                    value={inputPashto}
                    onChange={(e) => setInputPashto(e.target.value)}
                />
                <input
                    type="text"
                    placeholder={lang.inputEnglish}
                    value={inputEnglish}
                    onChange={(e) => setInputEnglish(e.target.value)}
                />
                {isEditing ? (
                    <button onClick={handleSaveEdit} className="save">{lang.save}</button>
                ) : (
                        <button onClick={handleAdd} className="add">{lang.add}</button>
                    )}
            </div>
        </div>
    );
};

export default List;
