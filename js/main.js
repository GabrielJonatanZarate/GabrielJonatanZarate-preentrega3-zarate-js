    // Evento al cargar el DOM
    document.addEventListener('DOMContentLoaded', function() {
        const precioInput = document.getElementById('precio');
        const descuentoInput = document.getElementById('descuento');
        const calcularBtn = document.getElementById('btn-calcular');
        const resultadoParrafo = document.getElementById('resultado');
  
        // Función para calcular el precio con descuento
        function calcularPrecioConDescuento(precio, descuento) {
          return precio * (1 - descuento / 100);
        }
  
        // Evento al hacer clic en el botón "Calcular Descuento"
        calcularBtn.addEventListener('click', function() {
          const precio = parseFloat(precioInput.value);
          const descuento = parseFloat(descuentoInput.value);
  
          // Verificación de entradas válidas
          if (!isNaN(precio) && !isNaN(descuento)) {
            const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
            resultadoParrafo.textContent = `Precio con descuento: $${precioConDescuento.toFixed(2)}`;
          } else {
            resultadoParrafo.textContent = 'Por favor, introduzca valores válidos.';
          }
        });
      });