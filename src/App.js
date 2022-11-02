import './App.css';
// import React, { useEffect, useRef, useState } from 'react'

import { Routes, Route } from 'react-router-dom';

import Home from './Pages/HomePage';
import About from './Pages/AboutPage';
import Contacts from './Pages/ContactsPage';
import NotFound from './Pages/NoFoundPage';

import Posts from './Pages/PostsPage';
import Post from './Pages/PostPage';

import Layout from './components/layout';


function App() {



  return (
    <div className="App">




    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/posts/:id' element={<Post />}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
      

    </Routes>

    </div>
  );
}



export default App;