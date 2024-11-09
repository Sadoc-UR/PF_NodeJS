window.onload = init;

function init() {
    if(localStorage.getItem("token")) { 
        document.querySelector('#btn-delete').addEventListener('click', modify);
    }
    else {
        window.location.href = "index.html";
    }
}

function modify() {
    var id = document.getElementById('input-user-id').value;

    axios({
        method: 'delete',
        url: 'http://localhost:3000/user/' + id,
        /*
        data: {
            user_first_name: firts_name,
            user_last_name: last_name,
            user_phone: phone,
            user_mail: mail,
            user_address: address,
            user_password: pass
        }
            */
    }).then(function(res){
        alert("Eliminacion Exitosa");
        window.location.href = "user.html";
        console.log(res);
    }).catch(function(err){
        alert("Campos Incompletos");
        console.log(err);
    })
}
