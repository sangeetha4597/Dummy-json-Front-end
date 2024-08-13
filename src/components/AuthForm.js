// import React, { useState } from 'react';
// // import './AuthForm.css'; // Styles for authentication forms

// const AuthForm = ({ type, onSubmit }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit(username, password);
//     };

//     return (
//         <form onSubmit={handleSubmit} className="auth-form">
//             <h2>{type === 'login' ? 'Login' : 'Register'}</h2>
//             <div className="form-group">
//                 <label htmlFor="username">Username:</label>
//                 <input
//                     type="text"
//                     id="username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//             </div>
//             <button type="submit" className="submit-btn">{type === 'login' ? 'Login' : 'Register'}</button>
//         </form>
//     );
// };

// export default AuthForm;
