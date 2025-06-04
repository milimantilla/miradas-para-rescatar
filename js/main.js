// Esperar que se cargue todo el DOM
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".btn-toggle");
  const menu = document.querySelector(".navbar .menu");
  const enlaces = document.querySelectorAll(".navbar .menu a");

  // ✅ Mostrar u ocultar el menú al hacer clic en el botón ☰
  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("activo");
  });

  // ✅ Cerrar el menú automáticamente al hacer clic en una opción
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      menu.classList.remove("activo");
    });
  });
});