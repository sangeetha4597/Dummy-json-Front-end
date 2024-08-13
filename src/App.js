import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ApiList from './components/ApiList';
import Documentation from './components/Documentation';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import './App.css'; // Main styles for the application
import Home from './components/Home';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<ApiList />} />
                        <Route path="/home" element={<Home/>} />
                        <Route path="/documentation" element={<Documentation />} />
                        {/* <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} /> */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
