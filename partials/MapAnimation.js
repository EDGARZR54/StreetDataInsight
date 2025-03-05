// mapa.js
(function() {
    // Inicializar mapa
    const map = new maplibregl.Map({
        container: 'map',
        style: 'https://cdn.jsdelivr.net/gh/EDGARZR54/StreetData-Insight@bd42c38ea76ee06d0735ef857563f3e8cd73d0d3/partials/MapStyle.json',
        center: [-69.88745587021114, 18.47668346661841],
        zoom: 2,
        bearing: 0,
        antialias: true,
        maplibreLogo: false
    });

    map.on('load', async function() {
        // Añadir controles UI
        const sliderContainer = document.createElement('div');
        sliderContainer.classList.add('slider-container');
        sliderContainer.innerHTML = `
            <h2>Caso de estudio - Santo Domingo, RD</h2>
            <div class="slider-controls">
                <label id="zoomLabel">Zoom: <span id="zoomValue">2</span></label>
                <input type="range" id="zoomSlider" min="2" max="15.2" value="2" step="0.1">
                <button id="toggleBtn">⏵</button>
            </div>`;
        document.getElementById('map').appendChild(sliderContainer);

        // Configurar controles de zoom
        const zoomSlider = document.getElementById('zoomSlider');
        const zoomValue = document.getElementById('zoomValue');
        const toggleBtn = document.getElementById('toggleBtn');
        let animationInterval;

        // Manejadores de eventos
        toggleBtn.addEventListener('click', handleAnimation);
        zoomSlider.addEventListener('input', handleManualZoom);
        map.on('zoom', syncSlider);

        // Cargar datos geoespaciales
        loadGeojsonData();
    });

    async function loadGeojsonData() {
        try {
            const response = await fetch('https://edgarzr54.github.io/StreetData-Insight/partials/RD_Manzanas.geojson');
            const geojsonData = await response.json();
            
            // Añadir capa al mapa
            map.addSource('manzanas', { type: 'geojson', data: geojsonData });
            map.addLayer({ id: 'manzanas-fill', type: 'fill', source: 'manzanas', paint: { 'fill-color': '#007BFF', 'fill-opacity': 0.5 } });
            map.addLayer({ id: 'manzanas-outline', type: 'line', source: 'manzanas', paint: { 'line-color': '#0056b3', 'line-width': 2 } });

            // Configurar interacción
            setupMapInteractions(geojsonData);
        } catch (error) {
            console.error('Error cargando GeoJSON:', error);
        }
    }

    function setupMapInteractions(geojsonData) {
        const popup = new maplibregl.Popup({ closeButton: true, closeOnClick: true });
        
        map.on('click', 'manzanas-fill', function(e) {
            const feature = e.features[0];
            if (!feature) return;

            // Actualizar componentes
            const props = feature.properties;
            window.dispatchEvent(new CustomEvent('manzana-selected', { detail: props }));

            // Mostrar popup
            const centroid = turf.centroid(feature);
            const [lng, lat] = centroid.geometry.coordinates;
            popup.setLngLat([lng, lat])
                .setHTML(`<div class="popup-content">
                            <strong>Vecindario:</strong> ${props.Vecindario}<br>
                            <strong>Manzana:</strong> ${props.Manzana}<br>
                            <strong>Área:</strong> ${turf.area(feature).toFixed(2)} m²<br>
                            <strong>Perímetro:</strong> ${turf.length(feature, {units: 'meters'}).toFixed(2)} m
                        </div>`)
                .addTo(map);

            map.flyTo({ center: [lng, lat], zoom: 18, speed: 1.5 });
        });

        map.on('mouseenter', 'manzanas-fill', () => map.getCanvas().style.cursor = 'pointer');
        map.on('mouseleave', 'manzanas-fill', () => map.getCanvas().style.cursor = '');
    }

    // Control de animación
    function handleAnimation() {
        if (this.textContent === '⏵') {
            this.textContent = '⏸';
            animationInterval = setInterval(() => {
                let currentValue = parseFloat(zoomSlider.value);
                if (currentValue < zoomSlider.max) {
                    zoomSlider.value = (currentValue + 0.1).toFixed(1);
                    map.easeTo({
                        center: [-69.88745587021114, 18.47668346661841],
                        zoom: zoomSlider.value,
                        duration: 300
                    });
                    zoomValue.textContent = zoomSlider.value;
                } else {
                    clearInterval(animationInterval);
                    this.textContent = '⏪︎';
                }
            }, 100);
        } else if (this.textContent === '⏸') {
            this.textContent = '⏵';
            clearInterval(animationInterval);
        } else if (this.textContent === '⏪︎') {
            this.textContent = '⏵';
            zoomSlider.value = 2;
            zoomValue.textContent = '2';
            map.easeTo({
                center: [-69.88745587021114, 18.47668346661841],
                zoom: 2,
                duration: 0
            });
        }
    }

    // Control manual del zoom
    function handleManualZoom(e) {
        const zoomLevel = parseFloat(e.target.value);
        map.setZoom(zoomLevel);
        zoomValue.textContent = zoomLevel.toFixed(1);
        
        if (zoomLevel < zoomSlider.max && toggleBtn.textContent === '⏪︎') {
            toggleBtn.textContent = '⏵';
        }
    }

    // Sincronizar slider
    function syncSlider() {
        if (!animationInterval && !zoomSlider.matches(':active')) {
            const currentZoom = map.getZoom();
            zoomSlider.value = currentZoom.toFixed(1);
            zoomValue.textContent = currentZoom.toFixed(1);
        }
    }
})();
