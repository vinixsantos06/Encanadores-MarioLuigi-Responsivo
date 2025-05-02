// Busca o formulário e a máscara no HTML;
const form = document.querySelector (".form-contact")
const overlay = document.querySelector(".overlay-container--form")

// ALtera o CSS co clicar no botão;
function openForm() {
  form.style.left = "50%"
  form.style.transform = "translateX(-50%)"
  overlay.style.visibility ="visible" // Mostra a máscara;
}

// ALtera o CSS ao clicar na máscara;
function closeForm() {
  overlay.style.visibility ="hidden" // Esconde a máscara;
  form.style.left = "-400px" // Volta o formulário para posição inicial
}