import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom"
import mockCats from './mockCats'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/catindex" element={<CatIndex />} />
      <Route path="/catshow" element={<CatShow />} />
      <Route path="/catnew" element={<CatNew />} />
      <Route path="/catedit" element={<CatEdit />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />

    
    </>
  );
}

export default App;
