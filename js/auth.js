// // User accounts (simulated with localStorage)
// const users = JSON.parse(localStorage.getItem('users')) || [];
// let currentUser = JSON.parse(localStorage.getItem('currentUser'));

// // Auth form submission
// document.getElementById('auth-form')?.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Check if user exists (simplified)
//     const user = users.find(u => u.email === email);

//     if (user) {
//         // Login
//         if (user.password === password) {
//             currentUser = { email };
//             localStorage.setItem('currentUser', JSON.stringify(currentUser));
//             window.location.href = 'account.html';
//         } else {
//             document.getElementById('auth-error').textContent = 'Incorrect password';
//         }
//     } else {
//         // Signup
//         users.push({ email, password });
//         localStorage.setItem('users', JSON.stringify(users));
//         currentUser = { email };
//         localStorage.setItem('currentUser', JSON.stringify(currentUser));
//         window.location.href = 'account.html';
//     }
// });

// // Load account info
// if (document.getElementById('user-email')) {
//     if (currentUser) {
//         document.getElementById('user-email').textContent = currentUser.email;
//     } else {
//         window.location.href = 'login.html';
//     }
// }

// // Logout
// function logout() {
//     localStorage.removeItem('currentUser');
//     window.location.href = 'login.html';
// }