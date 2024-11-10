window.onload = init;
var headers = {};
url = "http://localhost:3000/user/modify/";

function init() {
    if(localStorage.getItem("token")) { 
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        document.querySelector('#btn-modify').addEventListener('click', modify);
        document.querySelector('#btn-return').addEventListener('click', retur);
    }
    else {
        window.location.href = "index.html";
    }
}

function modify() {
    var id = document.getElementById('input-user-id').value;
    var firts_name = document.getElementById('input-firts-name').value;
    var last_name = document.getElementById('input-last-name').value;
    var phone = document.getElementById('input-phone').value;
    var mail = document.getElementById('input-mail').value;
    var address = document.getElementById('input-address').value;
    var pass = document.getElementById('input-password').value;

    if (!id || !firts_name || !last_name || !phone || !mail || !address || !pass) {
        alert("Por favor, complete todos los campos antes de enviar.");
        return;
    }

    axios({
        method: 'put',
        url: url + id,
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
        alert("Modificacion Exitosa");
        console.log(res);
        window.location.href = "user.html";
    }).catch(function(err){
        alert("Usuario no encontrado");
        console.log(err);
    })
}

function retur() {
    window.location.href = "user.html";
}