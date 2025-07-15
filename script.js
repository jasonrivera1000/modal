const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalParagraph = document.getElementById("modal-paragraph");
const modalExtra = document.getElementById("modal-extra");
const cerrar = document.getElementById("cerrar");

const leerMasBtns = document.querySelectorAll(".leer-mas");

const infoExtra = [
  "Texto adicional para la imagen 1. Explicación extendida.",
  "Texto adicional para la imagen 2. Explicación extendida.",
  "Texto adicional para la imagen 3. Explicación extendida.",
  "Texto adicional para la imagen 4. Explicación extendida.",
  "Texto adicional para la imagen 5. Explicación extendida.",
  "Texto adicional para la imagen 6. Explicación extendida.",
];

leerMasBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    const imgSrc = card.querySelector("img").src;
    const title = card.querySelector("h2").textContent;
    const paragraph = card.querySelector("p").textContent;

    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalParagraph.textContent = paragraph;
    modalExtra.textContent = infoExtra[index];

    modal.style.display = "flex";
  });
});

cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});