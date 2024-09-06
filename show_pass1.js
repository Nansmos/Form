var password = document.getElementById("password");
var icon = document.getElementById("toggle");

function showPass(){
    if(password.type === 'password'){
        password.setAttribute('type','text');
        icon.classList.add('hide');
    }
    else {
        password.setAttribute('type','password');
        icon.classList.remove('hide');
    }
}