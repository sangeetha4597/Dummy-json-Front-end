// import React from 'react';
// import AuthForm from './AuthForm';
// // import ''; // Styles for the register page

// const RegisterPage = () => {
//     const handleRegister = (username, password) => {
//         // Make a POST request to the backend for registration
//         fetch('/api/register', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ username, password }),
//         })
//             .then(response => {
//                 if (response.ok) {
//                     alert('Registration successful!');
//                 } else {
//                     alert('Registration failed. Please try again.');
//                 }
//             })
//             .catch(error => console.error('Error registering:', error));
//     };

//     return (
//         <div className="register-page">
//             <AuthForm type="register" onSubmit={handleRegister} />
//         </div>
//     );
// };

// export default RegisterPage;
