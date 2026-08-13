function expandir(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const block = button.parentElement;

    let lista = block.classList;

    if (lista.contains("activa")) {
        lista.remove("activa");
        button.textContent = "Ver más";
    } else {
        lista.add("activa");
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
    const asunto = datos.get("Miasunto");
    const mensaje = datos.get("Mimensaje");

    const subject = `${asunto} - ${nombre}`;
    const body = `${mensaje}`;

    if (nombre && email && mensaje) {
        window.location.href =
            `mailto: raul200402@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
        res.innerText = "Por favor llena los campos obligatorios antes de enviar";
    }
}

function cvLanguage(event) {
    event.preventDefault();
}