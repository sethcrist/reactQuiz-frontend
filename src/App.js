import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NoteCard from './components/NoteCard';
import {useState} from "react";
import { Routes, Route } from 'react-router-dom';
import mockUsers from "./mockUsers";
import mockNotes from "./mockNotes";
import Index from "./pages/Index"
import UserAuth from "./pages/UserAuth";

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[1]);
  const [notes, setNotes] = useState(mockNotes);

  return (
    <>
        <Header currentUser={currentUser} />
        <Routes>
            <Route path="/userAuth" element={<UserAuth />} />
            <Route path="/" element={<Index notes={notes} currentUser={currentUser} />}  />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
