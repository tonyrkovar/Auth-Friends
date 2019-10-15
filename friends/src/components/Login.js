import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const Login = () => {
    const initialCredentials = {
        username: '',
        password: ''
    }

    const [credentials, setCredentials] = useState(initialCredentials)
    const handleChanges = e => {
        console.log(credentials)
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('/api/login', credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
            })
            .catch(err => console.log('There was an error:', err.response))
    }

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    onChange={handleChanges}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={handleChanges}
                />
                <button>Login</button>
            </form>
        </div>
    )
}