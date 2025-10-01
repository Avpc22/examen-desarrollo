(function() {
    const toggleBtn = document.getElementById('togglePassword');
    const pwdInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    // Estado: false = oculto, true = visible
    let visible = false;

    toggleBtn.addEventListener('click', () => {
      visible = !visible;
      // cambia el tipo del input
      pwdInput.type = visible ? 'text' : 'password';

      // actualiza atributos accesibles
      toggleBtn.setAttribute('aria-label', visible ? 'Ocultar contraseña' : 'Mostrar contraseña');
      toggleBtn.setAttribute('title', visible ? 'Ocultar contraseña' : 'Mostrar contraseña');

      // (Opcional) cambiar el icono simple — aquí se invierte el fill como ejemplo
      if (visible) {
        eyeIcon.style.opacity = '0.6';
      } else {
        eyeIcon.style.opacity = '1';
      }

      // Mantener el foco en el input (buena UX)
      pwdInput.focus();
      // y mover el cursor al final
      const len = pwdInput.value.length;
      pwdInput.setSelectionRange(len, len);
    });

    // Previene que el botón dentro del input-group envíe el formulario por accidente
    toggleBtn.addEventListener('mousedown', (e) => e.preventDefault());
  })();