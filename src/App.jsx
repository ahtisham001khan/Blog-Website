import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './Components/Navigation';
import Home from './Components/Home';
import Blogs from './Pages/Blogs';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { Footer } from "./Components/Footer";
import SingleBlogPost from './Pages/Single_Blog';
import ScrollToTop from './Components/Scroll_Top'; 

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogpost" element={<SingleBlogPost />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
