window.onload = function () {
    let form = document.getElementById('loginForm');
    let password = document.getElementById("password");
    let togglePassword = document.getElementById("togglePassword");
    let email = document.getElementById("email");
    let forgotPassword = document.getElementById("forgotPassword");

    togglePassword.addEventListener("click", function () {
        let type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
    })

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if(email.value === "") {
            document.getElementById("emailValidator").innerHTML = "Required field";
        } else {
            document.getElementById("emailValidator").innerHTML = "";
        }
        if(password.value === "") {
            document.getElementById("passwordValidator").innerHTML = "Required field";
        } else {
            document.getElementById("passwordValidator").innerHTML = "";
        }
    })
}