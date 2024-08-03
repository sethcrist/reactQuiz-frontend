import React, {useState} from 'react';
import './component.css'

const NoteCard = ({ note }) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlipped = () => {
        setIsFlipped(!isFlipped)
    }
    return (
        <>
            <div className={`note-container ${isFlipped ? 'flipped' : ''}`} onClick={handleFlipped}>
                <div className="note-card-front">
                    <h3>{note.title}</h3>
                </div>

                <div className="note-card-back">
                    <p>{note.definition}</p>
                </div>
            </div>
        </>
    );
};

export default NoteCard;