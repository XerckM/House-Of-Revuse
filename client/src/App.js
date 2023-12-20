import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import HomeView from './components/views/home/HomeView';
import AboutView from './components/views/about/AboutView';
import AuthView from './components/views/auth/AuthView';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/about' element={<AboutView />} />
          <Route path='/specials' element={<h1>Specials</h1>} />
          <Route path='/login' element={<AuthView />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
