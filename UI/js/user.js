window.onload = init;
var headers = {};
var url = "http://localhost:3000";

function init() {
    if(localStorage.getItem("token")) {
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        /*
        loadUser();
        */
        document.querySelector('#btn-registro').addEventListener('click', add);
        document.querySelector('#btn-modificar').addEventListener('click', modify);
        document.querySelector('#btn-delete').addEventListener('click', del);
        document.querySelector('#btn-search').addEventListener('click', search);
    }
    else {
        window.location.href = "index.html";
    }
}

function add() {
    window.location.href = "add.html"
}

function modify() {
    window.location.href = "modify.html"
}

function del() {
    window.location.href = "delete.html"
}

function search() {
    window.location.href = "search.html"
}

/*
function loadUser() {
    axios.get(url + "/user", headers)
    .then(function(res) {
        console.log(res);
        displayUser(res.data.message);
    }).catch(function(err) {
        console.log(err);
    })
}

function displayUser(user) {
    var body = document.querySelector("body");
    for(var i = 0; i < user.length; i++) {
        body.innerHTML += `<h3>${user[i].user_first_name}<h3>`;
    }
}
    */