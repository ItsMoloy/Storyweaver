import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<h2>Login/Signup Page (to be implemented)</h2>} />
            </Routes>
        </Router>
    );
};

export default App;
