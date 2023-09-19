
function agregarDefinicion(elemento) {
    elemento.remove();
}

function agregarLike(elemento) {
    let numero = parseInt(elemento.value.substr(0, 2));
    numero++;

    elemento.value = `${numero} likes`;
    alert("Ninja was liked");
}

function presionarLogin(elemento) {
    if (elemento.value === "Login") {
        elemento.value = "Logout";
    }
    else {
        elemento.value = "Login";
    } 
}

