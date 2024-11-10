window.onload = init;
var headers = {};
url = "http://localhost:3000/user/add/";

function init() {
    if(localStorage.getItem("token")) { 
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        document.querySelector('#btn-add').addEventListener('click', add);
        document.querySelector('#btn-return').addEventListener('click', retur);
    }
    else {
        window.location.href = "index.html";
    }
}

function add() {
    var firts_name = document.getElementById('input-first-name').value;
    var last_name = document.getElementById('input-last-name').value;
    var phone = document.getElementById('input-phone').value;
    var mail = document.getElementById('input-mail').value;
    var address = document.getElementById('input-address').value;
    var pass = document.getElementById('input-password').value;

    axios({
        method: 'post',
        url: url,
        headers: headers.headers,
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
        window.location.href = "user.html";
        console.log(res);
    }).catch(function(err){
        alert("Campos incompletos")
        console.log(err);
    })
}

function retur() {
    window.location.href = "user.html";
}