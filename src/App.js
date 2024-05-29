import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Header';
import Tools from './components/Tools';
import "./App.css";


const App = () => {
    return (
        <div className='App p-3'>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Tools />} />
                    <Route path="/hubai-aas" element={<Tools />} />
                    <Route path="/experiments" element={<Tools />} />
                    <Route path="/configs" element={<Tools />} />
                    <Route path="/tools" element={<Tools />} />
                    <Route path="/profile" element={<Tools />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
