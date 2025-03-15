document.addEventListener("DOMContentLoaded", function () {
  const btnModoOscuro = document.getElementById("modo-oscuro");
  const body = document.body;

  // Modo oscuro
  btnModoOscuro.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("modoOscuro", "activado");
      btnModoOscuro.setAttribute("class", "fa-solid fa-sun");
      btnModoOscuro.setAttribute("style", "color: #FFFFFF;");
    } else {
      localStorage.setItem("modoOscuro", "desactivado");
      btnModoOscuro.setAttribute("class", "fa-solid fa-moon");
      btnModoOscuro.setAttribute("style", "color: #000000;");
    }
  });

  // Mantener modo oscuro si estaba activado
  if (localStorage.getItem("modoOscuro") === "activado") {
    body.classList.add("dark-mode");
  }

  // Mostrar alerta al hacer clic en un enlace de redes sociales
  document.querySelectorAll(".redes-sociales a").forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Esta función aún está en desarrollo.");
    });
  });

  // Hover dinámico en imágenes
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("mouseover", function () {
      this.style.transform = "scale(1.05)";
      this.style.transition = "0.3s";
    });
    img.addEventListener("mouseout", function () {
      this.style.transform = "scale(1)";
    });
  });
});
