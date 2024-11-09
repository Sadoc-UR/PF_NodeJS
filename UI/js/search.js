window.onload = init;
var url = "http://localhost:3000/user/search/";

function init() {
    if(localStorage.getItem("token")) { 
        document.querySelector('#btn-search').addEventListener('click', search);
    }
    else {
        window.location.href = "index.html";
    }
}


function search() {
    var first_name = document.getElementById('input-first-name').value;
    var last_name = document.getElementById('input-last-name').value;

    first_name = first_name.replace(/\s/g, '');
    last_name = last_name.replace(/\s/g, ''); 

    axios.get(url + first_name + last_name)
    .then(function(res) {
        console.log(res);
        displayUser(res.data.message[0]);
    }).catch(function(err) {
        console.log(err);
    })
}

function displayUser(user) {
    console.log(user);
    const userInfo = `Nombre: ${user.user_first_name} ${user.user_last_name}
                      Correo: ${user.user_mail}
                      Teléfono: ${user.user_phone}
                      Dirección: ${user.user_address}
                      Contraseña: ${user.user_password}`;
    document.getElementById('result').textContent = userInfo;
}
