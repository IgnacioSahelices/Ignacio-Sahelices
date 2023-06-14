var typed = new Typed(".auto-type", {
    strings: ["Frontend", "Marketing", "WebDev"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true


})
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

function scrollToContact() {
    var contactSection = document.getElementById("Contacto");
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
  // Función para manejar la aparición de elementos
  document.addEventListener("DOMContentLoaded", function() {
    function handleElementAppear(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Dejar de observar el elemento después de que aparece
        }
      });
    }
    
    // Crear una instancia del Intersection Observer
    const options = {
      threshold: 0.4, // Porcentaje de visibilidad requerido para activar la animación (ajusta según tus necesidades)
    };
    
    const observer = new IntersectionObserver(handleElementAppear, options);
    
    // Obtener todos los elementos a animar
    const elements = document.querySelectorAll(".fade-in");
    
    // Observar cada elemento
    elements.forEach((element) => {
      observer.observe(element);
    });
  });
  
  const btnArriba = document.querySelector("#btn-arriba");

btnArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  // Calcula la mitad de la altura de la ventana visible
  const halfViewportHeight = window.innerHeight / 2;

  // Si la posición del scroll supera la mitad de la altura de la ventana visible, muestra el botón, de lo contrario, ocúltalo
  if (scrollPosition > halfViewportHeight) {
    btnArriba.style.display = "block";
  } else {
    btnArriba.style.display = "none";
  }
});
function openNav() {
  document.getElementById("myNav").style.width = "60%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

document.getElementById("openNav").addEventListener('click', openNav);
document.getElementById("closeNav").addEventListener('click', closeNav);

document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.overlay-content a');
  var closeNav = document.querySelector('#closeNav');
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
      closeNav.click();
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const moreBtns = document.querySelectorAll('.more-btn');
  const face1s = document.querySelectorAll('.face.face1');
  const face2s = document.querySelectorAll('.face.face2');
  
  moreBtns.forEach(function(moreBtn, index) {
    let isExpanded = false;

    moreBtn.addEventListener('click', function() {
      const face1 = face1s[index];
      const face2 = face2s[index];

      if (!isExpanded) {
        face1.style.transform = 'translateY(-50px)';
        face2.style.transform = 'translateY(50px)';
        face2.style.visibility = 'visible';
        isExpanded = true;
      } else {
        face1.style.transform = 'translateY(0)';
        face2.style.transform = 'translateY(0)';
        face2.style.visibility = 'hidden';
        isExpanded = false;
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var cards = document.querySelectorAll('.card-wrapper');
  var modals = document.querySelectorAll('.card-wrapper .modal');
  var body = document.body;

  // Cerrar todos los modales abiertos
  var closeModals = function() {
    for (var j = 0; j < modals.length; j++) {
      modals[j].style.display = 'none';
    }
  }

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var modal = modals[i];

    card.addEventListener('click', function(event) {
      event.preventDefault();
      var currentModal = this.querySelector('.modal');
      var modalContent = currentModal.querySelector('.modal-content');
      modalContent.style.height = modalContent.scrollHeight + 'px';

      closeModals();

      currentModal.style.display = 'block';
      body.classList.add('modal-open');
    });

    var closeButton = modal.querySelector('.close');
    closeButton.addEventListener('click', function(e) {
      e.stopPropagation();
      this.closest('.modal').style.display = 'none';
      body.classList.remove('modal-open');
    });
  }
});




window.onload = function() {
  var openNav = document.getElementById('openNav');
  var myNav = document.getElementById('myNav');
  var closeNav = document.getElementById('closeNav');

  // Verificar si estamos en un dispositivo móvil
  if (window.innerWidth <= 760) {  // Ajusta este valor según tu criterio de qué constituye un dispositivo móvil
    openNav.addEventListener('click', function() {
      // Ocultar el openNav cuando se abre el navbar
      openNav.style.display = 'none';
      myNav.style.display = 'block';
    });

    closeNav.addEventListener('click', function() {
      // Mostrar el openNav cuando se cierra el navbar
      openNav.style.display = 'block';
      myNav.style.display = 'none';
    });
    document.addEventListener('click', function(event) {
      var isClickInside = myNav.contains(event.target);
      var isClickOnOpenNav = openNav.contains(event.target);
      
      if (!isClickInside && !isClickOnOpenNav && myNav.style.display == 'block') {
        // El clic fue fuera del overlay y no en el openNav, cerrar el overlay
        openNav.style.display = 'block';
        myNav.style.display = 'none';
      }
    });
    
  }
}



