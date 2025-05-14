import { useState } from 'react';
import './List.css'

const List = () => {
    const [text, setText] = useState("Hello, Masoumeh and you are best porp");
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim() !== '') {
            setText(inputValue);
            setInputValue('');
        }
    };

    const handleDelete = () => {
        setText('');
    };

    const handleEdit = () => {
        setIsEditing(true);
        setInputValue(text);
    };

    const handleSaveEdit = () => {
        setText(inputValue);
        setIsEditing(false);
        setInputValue('');
    };

    return (
        <div className="list">
            <ul>
                <li>{text}</li>
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
                        <>
                            <button onClick={handleAdd} className="add">Add Proverb</button>
                            <button onClick={handleEdit} className="edit">Edit Proverb</button>
                            <button onClick={handleDelete} className="delete">Delete Proverb</button>
                        </>
                    )}
            </div>
        </div>
    );
};

export default List;
