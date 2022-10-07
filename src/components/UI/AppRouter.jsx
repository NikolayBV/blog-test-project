import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from '../../Pages/About';
import PostIdPage from '../../Pages/PostIdPage';
import Posts from '../../Pages/Posts';

export const AppRouter = () => {
    return (
        <Routes>
          <Route 
            path="/about" 
            element={<About />}
          >
          </Route>
          <Route 
            exact
            path="/posts" 
            element={<Posts />}
          >
          </Route>
          <Route 
            exact
            path="/posts/:id" 
            element={<PostIdPage />}
          >
          </Route>
          <Route path='*' element={<Navigate replace to='/posts' />} />
        </Routes>
    );
};

export default AppRouter;