import React from 'react';

const NoteCard = ({ note }) => {

    return (
        <div key={note.id}>
             <h3>{note.title}</h3>
            <p>{note.definition}</p>
        </div>
    );
};

export default NoteCard;