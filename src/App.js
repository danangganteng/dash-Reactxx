import React, { useEffect } from 'react'; // Mengimpor useEffect dari React
import { Routes, Route, useNavigate } from 'react-router-dom'; // Impor routing dari react-router-dom
import Sidebar from './nav/sidebar';
import Login from './site/login';
import Dashboard from './site/dashboard';
import Customers from './site/customers';
import Product from './site/product';
import Report from './site/report';
import Setting from './site/setting';

function App() {
  const navigate = useNavigate(); 
  const isLoggedIn = localStorage.getItem("isLoggedIn"); 

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate, isLoggedIn]);

  return (
    <div>
      {/* Sidebar hanya tampil jika path bukan '/login' */}
      {isLoggedIn && <Sidebar />}
      
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/product' element={<Product />} />
        <Route path='/report' element={<Report />} />
        <Route path='/setting' element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
