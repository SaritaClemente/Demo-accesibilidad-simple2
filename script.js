let tamaño = 16;

const contrasteBtn = document.getElementById("contrasteBtn");
const aumentarBtn = document.getElementById("aumentarBtn");
const disminuirBtn = document.getElementById("disminuirBtn");

// Alto contraste
contrasteBtn.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");

    let activo = contrasteBtn.getAttribute("aria-pressed") === "true";
    contrasteBtn.setAttribute("aria-pressed", !activo);
});

// Aumentar texto
aumentarBtn.addEventListener("click", () => {
    tamaño += 2;
    document.body.style.fontSize = tamaño + "px";
});

// Disminuir texto
disminuirBtn.addEventListener("click", () => {
    tamaño -= 2;
    document.body.style.fontSize = tamaño + "px";
});