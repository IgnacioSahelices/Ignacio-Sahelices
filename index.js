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
          observer.unobserve(entry.target); 
        }
      });
    }
    
   
    const options = {
      threshold: 0.4, 
    };
    
    const observer = new IntersectionObserver(handleElementAppear, options);
    
    const elements = document.querySelectorAll(".fade-in");
    
    
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

  
  const halfViewportHeight = window.innerHeight / 2;

  
  if (scrollPosition > halfViewportHeight) {
    btnArriba.style.display = "block";
  } else {
    btnArriba.style.display = "none";
  }
});
function openNav() {
  var myNav = document.getElementById("myNav");
  
  // Solo aplicar si estamos en un dispositivo móvil
  if (window.innerWidth <= 760) {
    myNav.style.width = "60%";
  } else {
    // Si estamos en un dispositivo de escritorio, mantenemos el ancho normal
    myNav.style.width = "100%";  
  }
}

function closeNav() {
  var myNav = document.getElementById("myNav");
  
  // Solo aplicar si estamos en un dispositivo móvil
  if (window.innerWidth <= 760) {
    myNav.style.width = "0%";
  } else {
    // Si estamos en un dispositivo de escritorio, mantenemos el ancho normal
    myNav.style.width = "100%";  
  }
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
  var images = document.querySelectorAll('.card-top img');
  var modals = document.querySelectorAll('.modal');
  var body = document.body;

  // Cerrar todos los modales abiertos
  var closeModals = function() {
    for (var j = 0; j < modals.length; j++) {
      modals[j].style.display = 'none';
    }
  }

  // Asegurarse de que todos los modales están inicialmente ocultos
  closeModals();

  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var modal = modals[i];

    image.addEventListener('click', function(event) {
      event.stopPropagation();
      var currentModal = this.dataset.target;
      var modalContent = document.querySelector('#modal' + currentModal + ' .modal-content');
      modalContent.style.height = modalContent.scrollHeight + 'px';

      closeModals();

      document.querySelector('#modal' + currentModal).style.display = 'block';
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
  if (window.innerWidth <= 760) {  
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



