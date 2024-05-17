import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Component/About';
import Services from './Component/Services';
import Signup from './Component/Signup';
import Student from './Component/Student';
import Teacher from './Component/Teacher';
import TeacherForm from './Component/TeacherForm';
import Login from './Component/Login';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> {/* Pass login status and function */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Services' element={<Services />}></Route>
        <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route> {/* Pass setIsLoggedIn function */}
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Student' element={<Student />}></Route>
        <Route path='/Teacher' element={<Teacher />}></Route>
        <Route path='/TeacherForm' element={<TeacherForm />}></Route>
        {/* Redirect to login page if not logged in */}
        {!isLoggedIn && <Route path='*' element={<Navigate to='/Login' replace />} />}
      </Routes> 
    </div>
  );
}

export default App;
