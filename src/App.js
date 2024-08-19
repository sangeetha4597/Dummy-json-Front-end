import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ApiList from './components/ApiList';
import Documentation from './components/Documentation';
// import LoginPage from './components/LoginPage';
// import RegisterPage from './components/RegisterPage';
import './App.css'; // Main styles for the application
import Home from './components/Home';
import QueryPage from './components/QueryPage';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/ApiList" element={<ApiList />} />
                        <Route path="/documentation" element={<Documentation />} />
                        <Route path="/querypage" element={<QueryPage/>} />
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
