import React, {  } from 'react';
import './styles/normalize.css';
import './styles/index.css';
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
import About from './Pages/About';
import Posts from './Pages/Posts';
import HeadingMenu from './components/UI/HeadingMenu/HeadingMenu';
import AppRouter from './components/UI/AppRouter';


function App() {
  return(
    <BrowserRouter>
      <HeadingMenu/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
