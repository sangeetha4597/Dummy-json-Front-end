// import React from 'react';
// import AuthForm from './AuthForm';
// // import './LoginPage.css'; // Styles for the login page

// const LoginPage = () => {
//     const handleLogin = (username, password) => {
//         // Make a POST request to the backend for login
//         fetch('/api/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ username, password }),
//         })
//             .then(response => {
//                 if (response.ok) {
//                     alert('Login successful!');
//                 } else {
//                     alert('Login failed. Please check your credentials.');
//                 }
//             })
//             .catch(error => console.error('Error logging in:', error));
//     };

//     return (
//         <div className="login-page">
//             <AuthForm type="login" onSubmit={handleLogin} />
//         </div>
//     );
// };

// export default LoginPage;
