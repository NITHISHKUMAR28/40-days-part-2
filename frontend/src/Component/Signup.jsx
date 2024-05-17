import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usersData, setUsersData] = useState([]);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3003/Users')
            .then(res => {
                setUsersData(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const userExists = usersData.some(user => user.mail === mail && user.role === role);

        if (userExists) {
            alert('User with the same email and role already exists');
            return;
        }

        if (password === confirmPassword) {
            axios.post('http://localhost:3001/users/post', {
                role: role,
                name: name,
                mail: mail,
                password: password
            })
            .then(res => {
                console.log(res);
                setRegistrationSuccess(true);
            })
            .catch(err => console.log(err));
        } else {
            alert('Password and confirm password mismatch');
        }
    };

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-6 col-md-8'>
                    <div className='card mt-5'>
                        <div className='card-body'>
                            <h1 className='card-title text-center'>Welcome User</h1>
                            {!registrationSuccess ? (
                                <form onSubmit={handleSubmit}>
                                    <div className='mb-3 d-flex'>
                                        <label htmlFor='name' className='form-label'>User Name:</label>
                                        <input type='text' onChange={(e) => setName(e.target.value)} className='form-control' id='name' />
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
                                    <div className='mb-3 d-flex'>
                                        <label htmlFor='mail' className='form-label'>Mail id :</label>
                                        <input type='text' onChange={(e) => setMail(e.target.value)} className='form-control' id='mail' />
                                    </div>
                                    <div className='mb-3 d-flex'>
                                        <label htmlFor='password' className='form-label'>Password :</label>
                                        <input type='password' onChange={(e) => setPassword(e.target.value)} className='form-control' id='password' />
                                    </div>
                                    <div className='mb-3 d-flex'>
                                        <label htmlFor='confirmPassword' className='form-label'>Confirm Password :</label>
                                        <input type='password' onChange={(e) => setConfirmPassword(e.target.value)} className='form-control' id='confirmPassword' />
                                    </div>
                                    <div className='d-grid'>
                                        <button type="submit" className='btn btn-primary'>Submit</button>
                                    </div>
                                </form>
                            ) : (
                                <>
                                    {role === 'teacher' ? (
                                        <NavLink to='/Teacher' className='btn btn-primary'>Continue to Teacher Page</NavLink>
                                    ) : (
                                        <NavLink to='/Student' className='btn btn-primary'>Continue to Student Page</NavLink>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
