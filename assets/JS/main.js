document.addEventListener("DOMContentLoaded", function() {
  // Selecciona todos los links en el sidebar
  document.querySelectorAll(".sidebar-nav li > a").forEach(link => {
    const sub = link.nextElementSibling;
    if(sub && sub.tagName === 'UL'){ // si tiene sub-items
      link.addEventListener('click', function(e){
        e.preventDefault();               // evita ir a la página
        link.parentElement.classList.toggle('open'); // alterna colapso
      });
    }
  });
});
