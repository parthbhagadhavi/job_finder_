// App.jsx or App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';

import Add_full_page from './Pages/Add_full_page';
import Apply_form from './Pages/apply_form';
import Sign_up_page from './Pages/Sign_up_page';
import Sign_in_page from './Pages/Sign_in_page';
import Sign_up_company from './Pages/Sign_up_company';
import Sign_in_company from './Pages/Sign_in_company';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-job" element={<Add_full_page />} />
        <Route path="/applyform" element={< Apply_form/>} />
        <Route path="/sign_up" element={< Sign_up_page/>} />
        <Route path="/sign_in" element={< Sign_in_page/>} />
        <Route path="/sign_up_company" element={< Sign_up_company/>} />
        <Route path="/sign_in_company" element={< Sign_in_company/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
