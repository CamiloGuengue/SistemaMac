const users = document.querySelectorAll('.user-card');
const loginBtn = document.getElementById('loginBtn');
let selectedUser = '';
let selectedImagen = '';

users.forEach(user => {
  user.addEventListener('click', () => {
    // Quitar clase active de todos
    users.forEach(u => u.classList.remove('active'));
    user.classList.add('active');

    // ⚡ Guardar usuario y su imagen correctamente
    selectedUser = user.getAttribute('data-username');
    selectedImagen = user.getAttribute('data-imagen'); // debe coincidir con HTML

    console.log("Usuario seleccionado:", selectedUser);
    console.log("Imagen seleccionada:", selectedImagen);

    // Mostrar botón login
    loginBtn.classList.add('show');
  });
});

loginBtn.addEventListener('click', () => {
  if(selectedUser !== ''){
    // Guardar en localStorage
    localStorage.setItem('usuarioSeleccionado', selectedUser);
    localStorage.setItem('imagenUsuario', selectedImagen);

    window.location.href = "login_two.html";
  } else {
    alert('Selecciona un usuario primero');
  }
});
