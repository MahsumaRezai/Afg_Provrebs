import { useState } from 'react';
import './List.css';

const List = () => {
    const [proverbs, setProverbs] = useState([
        "Welcome, to Afghan Proverbs App"
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const handleAdd = () => {
        if (inputValue.trim() !== '') {
            setProverbs([...proverbs, inputValue]);
            setInputValue('');
        }
    };

    const handleDelete = (index) => {
        const updatedProverbs = proverbs.filter((_, i) => i !== index);
        setProverbs(updatedProverbs);
    };

    const handleEdit = (index) => {
        setIsEditing(true);
        setInputValue(proverbs[index]);
        setEditIndex(index);
    };

    const handleSaveEdit = () => {
        const updatedProverbs = [...proverbs];
        updatedProverbs[editIndex] = inputValue;
        setProverbs(updatedProverbs);
        setIsEditing(false);
        setInputValue('');
        setEditIndex(null);
    };

    return (
        <div className="list">
            <ul>
                {proverbs.map((text, index) => (
                    <li key={index}>
                        {text}
                        <div className="btn">
                            <button onClick={() => handleEdit(index)} className="edit">Edit</button>
                            <button onClick={() => handleDelete(index)} className="delete">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="btn">
                <input
                    type="text"
                    placeholder="Enter proverb..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                {isEditing ? (
                    <button onClick={handleSaveEdit} className="save">Save Edit</button>
                ) : (
                        <button onClick={handleAdd} className="add">Add Proverb</button>
                    )}
            </div>
        </div>
    );
};

export default List;
