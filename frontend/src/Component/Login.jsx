import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
// import axios from 'axios';

export default function Login({ setIsLoggedIn }) {
    const [role, setRole] = useState('teacher');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Fetch data from the provided JSON endpoint
        const response = await fetch(`http://localhost:3001/users/get/${mail}`);
        const userData = await response.json();

        // axios.get(`http://localhost:3001/users/get/${mail}`)


        // Get input values
        const mail = document.getElementById('mail').value;
        const password = document.getElementById('password').value;

        // Find user with matching mail and role
        const user = userData.find(user => user.mail === mail && user.role === role);

        if (user) {
            setName(user.name); // Set the name state
            setIsLoggedIn(true); // Update login status to true

            // Redirect based on role with name as URL parameter
            if (role === 'student') {
                window.location.href = `/Student?name=${user.name}`;
            } else {
                window.location.href = `/Teacher?name=${user.name}`;
            }
        } else {
            alert('Invalid mail or role');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 d-flex">
                    <label htmlFor="mail" className="form-label">Mail Id :</label>
                    <input type="text" className="form-control" id="mail" />
                </div>
                <div className="mb-3 d-flex">
                    <label htmlFor="password" className="form-label">Password :</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <div className='mb-3 d-flex'>
                    <label className='form-label'>Role :</label>
                    <div>
                        <input type='radio' id='teacher' name='role' value='teacher' checked={role === 'teacher'} onChange={() => setRole('teacher')} />
                        <label htmlFor='teacher' className='ms-2'>Teacher</label>
                    </div>
                    <div>
                        <input type='radio' id='student' name='role' value='student' checked={role === 'student'} onChange={() => setRole('student')} />
                        <label htmlFor='student' className='ms-2'>Student</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
