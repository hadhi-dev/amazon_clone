import React, { lazy, Suspense, memo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

const Home = lazy(() => import('./Home'));
const Checkout = lazy(() => import('./Checkout'));
const Header = memo(lazy(() => import('./Header')));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='text-blue-800'>Loading...</div>}>
        <Header />
        
        <div className="app bg-slate-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;