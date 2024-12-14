const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signinForm = document.getElementById('signin-form');

// Predefined credentials
const validUsers = [
    { name: 'satvik', email: 'satvik@gmail.com', password: '12345678' },
    { name: 'samarth', email: 'samarth@gmail.com', password: '12345678' }
];

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Handle sign-in form submission
signinForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('signin-name').value.trim();
    const email = document.getElementById('signin-email').value.trim();
    const password = document.getElementById('signin-password').value;

    const isValidUser = validUsers.some(user => 
        user.name === name && user.email === email && user.password === password
    );

    if (isValidUser) {
        // Redirect to another page
        window.location.href = '../Weather_app/index.html'; // Change 'welcome.html' to the desired page URL
    } else {
        alert('Invalid credentials. Please try again.');
    }
});