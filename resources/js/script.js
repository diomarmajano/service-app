const loginBtn = document.getElementById("loginButton");
if (loginBtn) {
    loginBtn.addEventListener("click", function() {
        const credenciales = JSON.parse(localStorage.getItem("credenciales"));
        var email = document.getElementById("serviceName").value;
        var password = document.getElementById("servicePassword").value;

        if (email === "" || password === "") {
            alert("Por favor, complete todos los campos.");
        } else if (credenciales && credenciales.email === email && credenciales.password === password) {
            window.location.href = "/views/form.html";
        } else {
            alert("Credenciales incorrectas.");
        }
    });
}

const registerBtn = document.getElementById("registerButton");
if (registerBtn) {
    registerBtn.addEventListener("click", function() { 
        var credenciales = {
            email: document.getElementById("registerName").value, 
            password: document.getElementById("registerPassword").value
        };
        localStorage.setItem("credenciales", JSON.stringify(credenciales));
        alert("Registro exitoso");
    });
}