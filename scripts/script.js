function expandir(event) {
    const button = event.currentTarget;
    const block = button.parentElement;

    if (block.classList.contains("activa")) {
        block.classList.remove("activa");
        button.textContent = "Ver más";
    } else {
        block.classList.add("activa");
        button.textContent = "Ver menos";
    }
}

function enviar(event) {
    event.preventDefault();
    const formulario = document.getElementById("Miformulario");
    let res = document.getElementById("resultado");
    
    const datos = new FormData(formulario);
    const nombre = datos.get("Minombre");
    const email = datos.get("Micorreo");
    const mensaje = datos.get("Mimensaje");

    if (nombre || email || mensaje) {
        res.innerText = "Se enviaron tus datos exitosamente!"
    } else {
        res.innerText = "Por favor llena los campos obligatorios antes de enviar"
    }
}