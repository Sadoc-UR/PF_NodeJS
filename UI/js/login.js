window.onload = init;

function init() {
    document.querySelector('.btn-primary').addEventListener('click', login);
    /*
    if(!localStorage.getItem("")) { //AGREGA token para que se inicie la validacion
        document.querySelector('.btn-secondary').addEventListener('click', function() {
            window.location.href = "signin.html"
        });
        document.querySelector('.btn-primary').addEventListener('click', login);
    }
    else {
        window.location.href = "index.html";
    }
    */
}

function login() {
    var mail = document.getElementById('input-mail').value;
    var pass = document.getElementById('input-password').value;

    axios({
        method: 'post',
        url: 'http://localhost:3000/user/login',
        data: {
            user_mail: mail,
            user_password: pass
        }
    }).then(function(res){
        if(res.data.code === 200) {
            localStorage.setItem("token", res.data.message);
            window.location.href = "user.html";
        }else {
            alert("Usuario y/o Contraseña incorrectos");
        }
    }).catch(function(err){
        console.log(err);
    })
}