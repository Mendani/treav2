 function actualizarEstado() {
      const boton = document.getElementById('estadoNegocio');
      const ahora = new Date();
      const dia = ahora.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
      const hora = ahora.getHours();
      const minutos = ahora.getMinutes();

      let abierto = false;

      // 💼 Lunes a Viernes: 20:00 a 0:30
      if (dia >= 1 && dia <= 5) {
        abierto = (
          (hora > 20 && hora < 0) ||
          (hora === 20 && minutos >= 0) ||
          (hora === 0 && minutos === 30)
        );
      }

      // 🛍️ Sábado: 20:00 a 1:00
      else if (dia === 6) {
        abierto = (
          (hora > 20 && hora < 1) ||
          (hora === 20 && minutos >= 00) ||
          (hora === 1 && minutos === 00)
        );
      }

      // 🛑 Domingo: cerrado (día 0) — no se modifica 'abierto'

      // Cambiar texto y color del botón
      if (abierto) {
        boton.textContent = 'Abierto';
        boton.classList.remove('cerrado');
        boton.classList.add('abierto');
      } else {
        boton.textContent = 'Cerrado';
        boton.classList.remove('abierto');
        boton.classList.add('cerrado');
      }
    }

    // Mostrar u ocultar los horarios al hacer clic
    document.getElementById('estadoNegocio').addEventListener('click', () => {
      actualizarEstado(); // refresca el estado por si cambia al hacer clic
      const info = document.getElementById('infoHorario');
      info.style.display = info.style.display === 'none' ? 'block' : 'none';
    });

    // Ejecutar al cargar
    actualizarEstado();

    // Actualizar cada minuto (por si cambia el estado)
    setInterval(actualizarEstado, 60000);