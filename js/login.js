window.addEventListener("DOMContentLoaded", function(){
    const email = document.querySelector("#usermail");
    const passwords = document.querySelector("#passwords");
    const valide = document.querySelector("#validate");
    const error = document.querySelector("#error_message");
    const _login1 = "tsioryR";
    const _login2 = "azerty01";
    
    valide.addEventListener('click', (e) => {
        if (email.value != _login1 || passwords.value != _login2) {
            error.classList.toggle("show");
            setTimeout(() => {
                error.classList.toggle("show");
            }, 17000);
        } else {
            window.location.href = "index.html";
        }
    });   
});