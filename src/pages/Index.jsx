import React, {useEffect, useState} from 'react';
import NoteCard from "../components/NoteCard";


const Index = ({ notes, currentUser }) => {

    const userNotes = notes.filter(note => note.user_id === currentUser.id);
    const [showNote, setShowNote] = useState(userNotes.length > 0);

    return (
        <>
            {showNote ? (
            <div>
                {userNotes.map((note) => (
                    <NoteCard key={note.id} note={note} />
                ))}
            </div>
                ) : (
                    <div>
                        <h1>You currently don't have any notes, lets make some!</h1>
                    </div>
                )
            }
        </>
    );
};

export default Index;