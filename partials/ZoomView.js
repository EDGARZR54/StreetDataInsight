document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".overlay");
  const largeImageContainer = document.getElementById("large-image-container");
  const largeImage = document.getElementById("large-image");

  let size = 180; // Tamaño inicial del contenedor
  const minSize = 180;
  const maxSize = 500;

  // Evento de clic en overlay para abrir la imagen en nueva pestaña
  overlay.addEventListener("click", () => {
    console.log("Click en overlay");
    if (largeImage.src) {
      console.log("Abriendo URL:", largeImage.src);
      window.open(largeImage.src, "_blank");
    }
  });

  // Evento de scroll para hacer zoom en el contenedor
  overlay.addEventListener("wheel", (event) => {
    event.preventDefault(); // Evita el scroll de la página

    const prevSize = size;

    if (event.deltaY < 0) {
      // Scroll arriba -> Aumenta tamaño
      size = Math.min(size + 10, maxSize);
    } else {
      // Scroll abajo -> Disminuye tamaño
      size = Math.max(size - 10, minSize);
    }

    // Calculamos la diferencia de tamaño
    const diff = size - prevSize;

    // Aplicamos el nuevo tamaño al contenedor
    largeImageContainer.style.width = `${size}px`;
    largeImageContainer.style.height = `${size}px`;

    // Calculamos el desplazamiento para mantener el centro
    const rect = largeImageContainer.getBoundingClientRect();
    const offsetX = diff / 2;
    const offsetY = diff / 2;

    // Ajustamos la posición de acuerdo con el desplazamiento
    largeImageContainer.style.left = `${rect.left - offsetX}px`;
    largeImageContainer.style.top = `${rect.top - offsetY}px`;

    // Obtener la posición actual del cursor en relación con el overlay
    const overlayRect = overlay.getBoundingClientRect();
    const cursorX = event.clientX - overlayRect.left;
    const cursorY = event.clientY - overlayRect.top;

    // Normalizar la posición del cursor en el overlay (0 a 1)
    const normalizedX = cursorX / overlayRect.width;
    const normalizedY = cursorY / overlayRect.height;

    // Mapear la posición normalizada a la imagen grande
    const largeImageWidth = largeImage.naturalWidth;
    const largeImageHeight = largeImage.naturalHeight;
    const mappedX = normalizedX * largeImageWidth;
    const mappedY = normalizedY * largeImageHeight;

    // Ajustar la transformación en la imagen grande para hacer el zoom correctamente
    const newOffsetX = -mappedX + size / 2;
    const newOffsetY = -mappedY + size / 2;

    largeImage.style.transform = `translate(${newOffsetX}px, ${newOffsetY}px)`;
  });
});
