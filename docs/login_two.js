const usuario = localStorage.getItem('usuarioSeleccionado') || 'Invitado';
let imagen;

// Condicional según el usuario
if(usuario === 'Diego'){
    imagen = 'CMD/diego.webp';
} else if(usuario === 'Cesar'){
    imagen = 'CMD/cesar.webp';
} else if(usuario === 'Miguel'){
    imagen = 'CMD/miguel.jpg';
} else {
    imagen = 'usuario.png'; // fallback
}

// Asignar al HTML
document.getElementById('usuarioNombre').textContent = usuario;
document.getElementById('userImage').src = imagen;

const loginArrow = document.getElementById('loginArrow');

// Agregamos el evento click
loginArrow.addEventListener('click', () => {
    // Aquí pones la ruta del archivo principal
    window.location.href = '../MiniOs/index.html'; // ⚡ cambia 'principal.html' por tu archivo
});

const backArrow = document.getElementById('backArrow');

backArrow.addEventListener('click', () => {
    // Redirige a la página de selección de usuario
    window.location.href = 'login_one.html'; // ⚡ Cambia según tu ruta
});