import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Portfolio from './Portfolio';
import NoPage from './NoPage';
import Work from "./Work";
  
export default function App() {
  return (
       <BrowserRouter basename="Home/">
      
  <Header/>

   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
