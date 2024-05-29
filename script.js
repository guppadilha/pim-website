// Login
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email === 'user@example.com' && password === 'password123') {
            Swal.fire({
                title: 'Login realizado com sucesso!',
                text: 'Você será redirecionado para a página inicial.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'index.html';
                }
            });
        } else {
            Swal.fire({
                title: 'Erro!',
                text: 'Senha ou E-mail incorretos.',
                icon: 'error',
                confirmButtonText: 'Tente novamente'
            });
        }
    });
}

// Cadastro
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            Swal.fire({
                title: 'Erro!',
                text: 'As senhas não combinam.',
                icon: 'error',
                confirmButtonText: 'Correto'
            });
        } else {
            Swal.fire({
                title: 'Cadastro bem sucedido!',
                text: 'Você será redirecionado para a página de login.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'login.html';
                }
            });
        }
    });
}
