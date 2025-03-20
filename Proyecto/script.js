document.addEventListener("DOMContentLoaded", function() {
    // Obtener el modal
    var registroModal = document.getElementById("registroModal");
    var loginModal = document.getElementById("loginModal");
    
    // Obtener el botón que abre el modal
    var registroBtn = document.getElementById("registrobtn");
    var loginBtn = document.getElementById("loginBtn");   
    // Obtener el elemento <span> que cierra el modal
    var closeBtn = registroModal.getElementsByClassName("close-btn")[0];
    var loginCloseBtn = loginModal.getElementsByClassName("close-btn")[0];

    // Cuando el usuario hace clic en el botón, se abre el modal
    registroBtn.onclick = function() {
        registroModal.style.display = "block";
    }
    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }

    // Cuando el usuario hace clic en <span> (x), se cierra el modal
    closeBtn.onclick = function() {
        registroModal.style.display = "none";
    }
    loginCloseBtn.onclick = function() {
        loginModal.style.display = "none";
    }
    

    // Cuando el usuario hace clic en cualquier parte fuera del modal, se cierra el modal
    window.onclick = function(event) {
        if (event.target == registroModal) {
            registroModal.style.display = "none";
        }
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        
    }

     // Obtener los botones de compra de boletos
     var openModalBtns = document.querySelectorAll('.open-modal-btn');
    
     // Función para redirigir a la página de compra de boletos
     openModalBtns.forEach(btn => {
         btn.addEventListener('click', function() {
             // Obtener la URL del atributo data-url
             var url = btn.getAttribute('data-url');
             // Redirigir a la página de compra de boletos
             window.location.href = url;
         });
     });
});