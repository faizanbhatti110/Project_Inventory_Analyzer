/// The component for the login page of the application. It includes a form for users to enter their username and password, and a button to submit the form. The component also handles the state of the form inputs and the submission process.

import React, { useState } from 'react';
import './login.css';   


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');   
    const [error, setError] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle authentication logic, such as sending a request to your backend API
        if (username === 'admin' && password === 'password') {
            setError('');
            alert('Login successful!');
            // Redirect to the dashboard or another page
        } else {
            setError('Invalid username or password');
        }
    }};