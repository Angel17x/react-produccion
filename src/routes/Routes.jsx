import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import React, { lazy, Suspense } from 'react';
import Loader from '../components/loader/Loader';
const Home = lazy(() => import("../components/home/Home"));
const About = lazy(() => import("../components/about/About"));

const Router = () => { 
    return(
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route 
                element={
                <Suspense fallback={<Loader/>}>
                    <Home/>
                </Suspense>
                } 
                path="/"/>
            <Route 
                element={
                <Suspense fallback={<Loader/>}>
                    <About/>
                </Suspense>
                } 
                path="/about"/>
        </Routes>
    </BrowserRouter>
    )
};

export default Router;