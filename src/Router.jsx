import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import UpcommingPage from './Pages/UpcommingPage';
import AddPage from './Pages/AddPage';
import EditPage from './Pages/EditPage';
import MainLayout from './Layout/MainLayout';
import NotFound from './Pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainLayout /> }>
            <Route index element= { <HomePage />} />
            <Route path="upcomming" element={<UpcommingPage /> } />
            <Route path="add" element ={<AddPage />} />
            <Route path="edit/:id" element={<EditPage />} />
            <Route path="*" element={<NotFound />} /> 
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router
