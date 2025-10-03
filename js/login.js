const correo = "admin@gmail.com";
const password = "1234";

const btn = document.getElementById("btn-login");

btn.addEventListener("click", () => {
    const correoInput = document.getElementById("correo").value; 
    const passwordInput = document.getElementById("password").value;
    if(correoInput === correo && passwordInput === password){
        window.location.href = "index.html";
    }else{
        alert("Correo o contraseña incorrectos");
    }
})