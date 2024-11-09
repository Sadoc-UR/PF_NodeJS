window.onload = init;

function init() {
    if(localStorage.getItem("token")) { 
        document.querySelector('#btn-modify').addEventListener('click', modify);
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


    axios({
        method: 'put',
        url: 'http://localhost:3000/user/' + id,
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
        window.location.href = "user.html";
        console.log(res);
    }).catch(function(err){
        alert("Campos Incompletos");
        console.log(err);
    })
}
