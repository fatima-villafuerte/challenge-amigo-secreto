
document.addEventListener("DOMContentLoaded", () => {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let amigos = [];

    window.agregarAmigo = function () {
        const nombre = inputAmigo.value.trim();
        if (nombre !== "" && !amigos.includes(nombre)) {
            amigos.push(nombre);
            actualizarLista();
            inputAmigo.value = "";
        }
    };

    window.sortearAmigo = function () {
        if (amigos.length > 0) {
            const indiceAleatorio = Math.floor(Math.random() * amigos.length);
            resultado.innerHTML = `<li> El amigo secreto es: ${amigos[indiceAleatorio]}!</li>`;
        } else {
            resultado.innerHTML = "<li> No hay nombres en la lista</li>";
        }
    };

    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });
    }
});
