import "./App.scss"
import React, { useEffect, useState } from 'react'
import HomePage from "./pages/HomePage/HomePage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/videos/:id" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;