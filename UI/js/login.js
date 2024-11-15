window.onload = init;

function init() {
    document.querySelector('.btn-primary').addEventListener('click', login);
    localStorage.removeItem("token");
}

function login() {
    var mail = document.getElementById('input-mail').value;
    var pass = document.getElementById('input-password').value;

    axios({
        method: 'post',
        url: 'http://localhost:3000/login/login',
        data: {
            admin_mail: mail,
            admin_password: pass
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