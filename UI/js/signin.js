window.onload = init;

function init() {
    if(!localStorage.getItem("")) { ///Agrega "token" par aque se haga la incializacion
        document.querySelector('.btn-secondary').addEventListener('click', function() {
            window.location.href = "login.html"
        });
        document.querySelector('.btn-primary').addEventListener('click', signin);
    }
    else {
        window.location.href = "user.html";
    }
}

function signin() {
    var firts_name = document.getElementById('input-firts-name').value;
    var last_name = document.getElementById('input-last-name').value;
    var phone = document.getElementById('input-phone').value;
    var mail = document.getElementById('input-mail').value;
    var address = document.getElementById('input-address').value;
    var pass = document.getElementById('input-password').value;


    axios({
        method: 'post',
        url: 'http://localhost:3000/user/signin',
        data: {
            user_first_name: firts_name,
            user_last_name: last_name,
            user_phone: phone,
            user_mail: mail,
            user_address: address,
            user_password: pass
        }
    }).then(function(res){
        alert("Registro Exitoso");
        window.location.href = "login.html";
        console.log(res);
    }).catch(function(err){
        console.log(err);
    })
}
