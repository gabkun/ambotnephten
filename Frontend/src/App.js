import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Navbar from './components/pages/navbar/navbar'; 
import Footer from './components/pages/footer/footer'; 
import Homepage from './components/pages/homepage/homepage'; 
import Courses from './components/pages/Courses/Courses';
import SignInModal from './components/pages/navbar/SignInModal'
import About from './components/pages/About/About';
import Pages from './components/pages/Pages/pages';
import Contact from './components/pages/Contact/Contact';

import AdminDashboard from './components/pages/dashboard/AdminDashboard';
import Dashboard from './components/pages/dashboard/Dashboard';
import AccountSettings from './components/pages/navbar/AccountSettings';
import AdminModal from './components/pages/navbar/AdminModal';
import AdminLogin from './components/pages/navbar/AdminLogin';
import Kinder from './components/pages/classroom/kinder';
import Prep from './components/pages/classroom/Prep';
import Nursery from './components/pages/classroom/nursery';


function App() {
  return (

    <div>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/Signup" element={<SignInModal />} />
          <Route path="/Nursery" element={<Nursery />} />
          <Route path="/Kinder" element={<Kinder />} />
          <Route path="/Prep" element={<Prep />} />
          <Route path="/Userdashboard" element={<Dashboard />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/AccountSettings" element={<AccountSettings />} />
          <Route path="/AdminModal" element={<AdminModal />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />

          
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}

export default App;