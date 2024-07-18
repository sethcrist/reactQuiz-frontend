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
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0]);
  const [notes, setNotes] = useState(mockNotes);

  return (
    <>
        <Header />
        <Routes>
            <Route path="/userAuth" element={<UserAuth />} />
            <Route path="/" element={<Index />} />
            {/*<Route path="/signUp" element={<SignUp />} />*/}
            {/*<Route path="/signIn" element={<SignIn />} />*/}
        </Routes>
        <Footer />
    </>
  );
}

export default App;
