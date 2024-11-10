window.onload = init;

function init() {
    if(localStorage.getItem("token")) {
        document.querySelector('#btn-registro').addEventListener('click', add);
        document.querySelector('#btn-modificar').addEventListener('click', modify);
        document.querySelector('#btn-delete').addEventListener('click', dele);
        document.querySelector('#btn-search').addEventListener('click', search);
        document.querySelector('#btn-logOut').addEventListener('click', logOut);

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

function dele() {
    window.location.href = "delete.html"
}

function search() {
    window.location.href = "search.html"
}

function logOut() {
    localStorage.removeItem("token");
    alert("Sesión cerrada correctamente.");
    window.location.href = "login.html"
}