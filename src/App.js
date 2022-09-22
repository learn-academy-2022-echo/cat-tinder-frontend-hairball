import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
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
  const [ cats, setCats ] = useState(mockCats)

  const createCat = (cat) => {
    console.log("Cat has been created", cat)
  }

  const updateCat = (cat, id) => {
    console.log("cat:", cat)
    console.log("id:", id)
  }

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/catindex" element={<CatIndex cats={cats} />} />
      <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
      <Route path="/catnew" element={<CatNew createCat={createCat}/>} />
      <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat}/>} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
