class MainProject {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.cubes = [];
        
        // Inicializar el generador de ciudad
        this.cityGenerator = new ProceduralCityGenerator(this.scene, {
            buildingSize: 15,
            floorHeight: 2.5,
            colorPalette: [0xFF6B6B, 0x4ECDC4, 0x45B7D1, 0x96CEB4, 0xFECCA7, 0xFD79A8],
            enableOptimization: true,
            detailLevel: 'high' // 'low', 'medium', 'high'
        });
        
        this.init();
    }
    
    init() {
        // Configurar renderer, cámara, controles, etc.
        this.setupRenderer();
        this.setupLighting();
        this.setupControls();
        
        // Crear cubos iniciales
        this.createInitialCubes();
        
        // Generar ciudad inicial
        this.updateCity();
        
        this.animate();
    }
    
    setupRenderer() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.body.appendChild(this.renderer.domElement);
    }
    
    setupLighting() {
        // Tu configuración de luces existente
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
        directionalLight.position.set(50, 100, 50);
        directionalLight.castShadow = true;
        this.scene.add(directionalLight);
    }
    
    setupControls() {
        // Tu configuración de controles existente
        this.camera.position.set(50, 40, 50);
        this.camera.lookAt(0, 0, 0);
    }
    
    createInitialCubes() {
        // Crear un grid 4x4 de cubos como ejemplo
        const gridSize = 4;
        const spacing = 15;
        
        for (let x = 0; x < gridSize; x++) {
            for (let z = 0; z < gridSize; z++) {
                const height = Math.random() * 20 + 10;
                const geometry = new THREE.BoxGeometry(10, height, 10);
                const material = new THREE.MeshLambertMaterial({ 
                    color: 0x888888,
                    transparent: true,
                    opacity: 0.3 // Hacer los cubos originales semi-transparentes
                });
                
                const cube = new THREE.Mesh(geometry, material);
                cube.position.set(
                    (x - gridSize/2 + 0.5) * spacing,
                    height / 2,
                    (z - gridSize/2 + 0.5) * spacing
                );
                
                // Opcional: ocultar los cubos originales si solo quieres mostrar los edificios
                // cube.visible = false;
                
                this.scene.add(cube);
                this.cubes.push(cube);
            }
        }
    }
    
    // Método principal para actualizar la ciudad cuando cambien los cubos
    updateCity() {
        // Filtrar cubos válidos (por si algunos fueron eliminados)
        const validCubes = ProceduralCityGenerator.filterValidCubes(this.cubes);
        
        if (validCubes.length === 0) {
            console.warn('No hay cubos válidos para generar la ciudad');
            return;
        }
        
        // Generar la ciudad basada en los cubos
        const buildings = this.cityGenerator.generateFromCubes(validCubes);
        
        console.log(`Ciudad generada con ${buildings.length} edificios`);
    }
    
    // Método para cambiar la altura de un cubo específico
    changeCubeHeight(cubeIndex, newHeight) {
        if (cubeIndex >= 0 && cubeIndex < this.cubes.length) {
            const cube = this.cubes[cubeIndex];
            
            // Actualizar la geometría del cubo
            cube.geometry.dispose();
            cube.geometry = new THREE.BoxGeometry(10, newHeight, 10);
            cube.position.y = newHeight / 2;
            
            // Regenerar la ciudad
            this.updateCity();
        }
    }
    
    // Método para añadir un nuevo cubo
    addCube(x, z, height) {
        const geometry = new THREE.BoxGeometry(10, height, 10);
        const material = new THREE.MeshLambertMaterial({ 
            color: 0x888888,
            transparent: true,
            opacity: 0.3
        });
        
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(x, height / 2, z);
        
        this.scene.add(cube);
        this.cubes.push(cube);
        
        // Actualizar ciudad
        this.updateCity();
    }
    
    // Método para eliminar un cubo
    removeCube(cubeIndex) {
        if (cubeIndex >= 0 && cubeIndex < this.cubes.length) {
            const cube = this.cubes[cubeIndex];
            this.scene.remove(cube);
            cube.geometry.dispose();
            cube.material.dispose();
            
            this.cubes.splice(cubeIndex, 1);
            
            // Actualizar ciudad
            this.updateCity();
        }
    }
    
    // Método para cambiar la paleta de colores
    changeColorPalette(newPalette) {
        this.cityGenerator.updateColorPalette(newPalette);
        this.updateCity();
    }
    
    // Método para cambiar el nivel de detalle
    changeDetailLevel(level) {
        this.cityGenerator.setDetailLevel(level);
        this.updateCity();
    }
    
    // Método para obtener estadísticas
    getCityStats() {
        return {
            cubeCount: this.cubes.length,
            buildingCount: this.cityGenerator.getBuildingCount(),
            config: this.cityGenerator.getConfig()
        };
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);
    }
    
    // Limpiar recursos al destruir
    dispose() {
        this.cityGenerator.dispose();
        
        this.cubes.forEach(cube => {
            this.scene.remove(cube);
            cube.geometry.dispose();
            cube.material.dispose();
        });
        
        this.cubes = [];
    }
}
window.ProceduralCityGenerator = ProceduralCityGenerator;
