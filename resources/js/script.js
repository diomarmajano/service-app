//Primero estoy verificando que exista el elemento, para evitar errores si el scrip se carga en una pagina donde este no exista
const loginBtn = document.getElementById("loginButton");
if (loginBtn) {
  loginBtn.addEventListener("click", function () {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
    if (email === "" || password === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }
    // Aca recupero la lista de usuarios, para luego comprobar las credenciales
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const user = usuarios.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      // Guardar credenciales del usuario logueado
      localStorage.setItem(
        "credenciales",
        JSON.stringify({
          email: user.email,
          password: user.password,
        })
      );
      window.location.href = "/views/form.html";
    } else {
      alert("Credenciales incorrectas.");
    }
  });
}

const registerBtn = document.getElementById("registerButton");
if (registerBtn) {
  registerBtn.addEventListener("click", function () {
    var newUser = {
      name: document.getElementById("name").value,
      rol: document.getElementById("rol").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    let users = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si el email ya existe
    const exists = users.some((user) => user.email === newUser.email);
    if (exists) {
      alert("El correo ya está registrado.");
      return;
    }

    // Agregar nuevo usuario
    users.push(newUser);
    localStorage.setItem("usuarios", JSON.stringify(users));
    alert("Registro exitoso");
    window.location.href = "/views/login.html";
  });
}

const usuario = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");
const rol = document.getElementById("rol");
const btnguardar = document.getElementById("btnguardar");
// Mostrar los datos solo del usuario que está logueado
if (usuario && contraseña) {
  const credenciales = JSON.parse(localStorage.getItem("credenciales"));
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  if (credenciales && usuarios.length > 0) {
    const user = usuarios.find(
      (u) =>
        u.email === credenciales.email && u.password === credenciales.password
    );
    if (user) {
      if (user.name) usuario.value = user.name;
      if (user.email) correo.value = user.email;
      if (user.rol) rol.value = user.rol;
      if (user.password) contraseña.value = user.password;
    }
  }
}
if (btnguardar) {
  btnguardar.addEventListener("click", function () {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const credenciales = JSON.parse(localStorage.getItem("credenciales"));

    if (!credenciales) {
      alert("No hay usuario logueado.");
      return;
    }
    const idx = usuarios.findIndex(
      (u) =>
        u.email === credenciales.email && u.password === credenciales.password
    );
    if (idx === -1) {
      alert("Usuario no encontrado.");
      return;
    }

    usuarios[idx] = {
      name: usuario.value,
      email: correo.value,
      password: contraseña.value,
      rol: rol.value,
    };

    // Guardar cambios en localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    localStorage.setItem(
      "credenciales",
      JSON.stringify({
        email: correo.value,
        password: contraseña.value,
      })
    );

    alert("Datos actualizados exitosamente");
  });
}

// Recuperar contraseña
const recuperarBtn = document.getElementById("repBtn");
const emailRecuperar = document.getElementById("repEmail");
const passwordRecuperar = document.getElementById("repPassword");

if (recuperarBtn) {
  recuperarBtn.addEventListener("click", function () {
    var email = emailRecuperar.value;
    var password = passwordRecuperar.value;
    if (email === "" || password === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }
    // Aca recupero la lista de usuarios, para luego comprobar las credenciales
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const user = usuarios.find((u) => u.email === email);
    if (user) {
      // Actualizar la contraseña del usuario
      user.password = password;
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      alert("Contraseña recuperada exitosamente.");
      window.location.href = "/views/login.html";
    } else {
      alert("Email no encontrado.");
    }
  });
}
