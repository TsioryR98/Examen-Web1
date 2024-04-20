window.addEventListener("DOMContentLoaded", function(){
    const email = document.querySelector("#usermail");
    const passwords = document.querySelector("#passwords");
    const valide= document.querySelector("#validate");
    var error = document.querySelector("#error_message")
    const _login1 = "tsioryR";
    const _login2 = "azerty01";

    valide.addEventListener('click',() => {
        if (email.value != _login1 || passwords.value != _login2) {
            error.style.display = "block";
        } else {
            window.location.href = "index.html";
        }
    }
)
});