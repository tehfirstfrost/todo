import React from 'react';
import { TodoContainer} from './components';
import { NotFound, Home } from './pages';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
    return (
        <div className='app'>
            <BrowserRouter basename='/todo'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/main" element={<TodoContainer />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;
