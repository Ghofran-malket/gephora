const inputEmail = document.getElementById('EmailInput');
const inputPassword = document.getElementById('PasswordInput');
const btnSignin = document.getElementById('btn-signin');

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){

    if(inputEmail.value == "test@mail.com" && inputPassword.value == "toto123"){
        //Il faudra récupérer le vrai token
        const token = "msdlkmdldfknskldfnosdfnksdfnklsdmkskldkmlskdkosadamsld";
        setToken(token);
        //placer ce token en cookie

        //setCookie(RoleCookieName, "admin", 7);
        window.location.replace("/");
    }
    else{
        inputEmail.classList.add("is-invalid");
        inputPassword.classList.add("is-invalid");
    }
}