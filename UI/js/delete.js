window.onload = init;
var headers = {};
url = "http://localhost:3000/user/delete/";

function init() {
    if(localStorage.getItem("token")) { 
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        document.querySelector('#btn-delete').addEventListener('click', delt);
        document.querySelector('#btn-return').addEventListener('click', retur);
    }
    else {
        window.location.href = "index.html";
    }
}

function delt() {
    var id = document.getElementById('input-user-id').value;
    axios.delete(url + id, headers)
    .then(function(res) {
        alert("Eliminacion Exitosa");
        window.location.href = "user.html";
    }).catch(function(err) {
        alert("Usuario no encontrado");
        console.log(err);
    })
}

function retur() {
    window.location.href = "user.html";
}