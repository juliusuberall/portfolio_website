import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//Connect to div that stores the configurator
const container = document.getElementById('yu_configurator');

// Create a scene
const scene = new THREE.Scene();

// Create a camera and update
const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);

//Setup renderer and set viewer in HTML
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setClearColor(0xffffff);
container.appendChild(renderer.domElement);

//Light setup
const ambient = new THREE.AmbientLight(0xffffff,0.5);
scene.add(ambient);
const light = new THREE.DirectionalLight(0xFFFFFF, 1);
light.position.set(-3, 5, 2);
scene.add(light);

// Active mesh variable
var activeMeshes;

// Create OrbitControls to enable camera rotation
camera.position.z = 10;
const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0,0,0);
controls.enableDamping = true;
//Disable right mouse button movement of camera
controls.mouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,
    MIDDLE: THREE.MOUSE.DOLLY
};

//Add keyboard interactions
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is 'K' (or 'k')
    if (event.key === 'K' || event.key === 'k') {
        //Create curve
        const points = [];
        points.push( new THREE.Vector3( RandomInRange(-5,5), RandomInRange(-5,5), RandomInRange(-10,0)) );
        points.push( new THREE.Vector3( RandomInRange(-5,5), RandomInRange(-5,5), RandomInRange(-10,0)) );
        points.push( new THREE.Vector3( RandomInRange(-5,5), RandomInRange(-5,5), RandomInRange(-10,0)) );
        const curve = new QuadraticBezierCurve(points[0],points[1], points[2]);

        // Create a tube (extrude) from the line's geometry
        const tubeGeometry = new THREE.TubeGeometry(curve, 100, 0.03, 8, false);
        const tubeMaterial = new THREE.MeshPhongMaterial({ color: 0xff00ff });
        const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
        scene.add(tube);
    }

    activeMeshes = getActiveMeshesFromScene(scene);
    controls.target = calculateCenter(activeMeshes);//update orbit center
});


//Basic animation + render loop for updating
function animate(){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();




// Standalone implementations//////////////////////////////////////////////////////////////////

//Curve implementation
class QuadraticBezierCurve extends THREE.Curve {
    constructor(v0, v1, v2) {
        super();
        this.v0 = v0;
        this.v1 = v1;
        this.v2 = v2;
    }

    getPoint(t) {
        const oneMinusT = 1 - t;
        return new THREE.Vector3(
            oneMinusT * oneMinusT * this.v0.x + 2 * oneMinusT * t * this.v1.x + t * t * this.v2.x,
            oneMinusT * oneMinusT * this.v0.y + 2 * oneMinusT * t * this.v1.y + t * t * this.v2.y,
            oneMinusT * oneMinusT * this.v0.z + 2 * oneMinusT * t * this.v1.z + t * t * this.v2.z
        );
    }
}

//Create random number in range
function RandomInRange(start, end){
    return (end - start) * Math.random() + start;
}

// Function to calculate the center point of active meshes
function calculateCenter(inputMeshes) {
    if(inputMeshes.length > 0){
        const center = new THREE.Vector3();

        for (const mesh of inputMeshes) {
            mesh.geometry.computeBoundingSphere();
            center.add(mesh.geometry.boundingSphere.center.clone().applyMatrix4(mesh.matrixWorld));
        }
    
        center.divideScalar(inputMeshes.length);
        return center;
    }
    else{
        return new THREE.Vector3(0,0,0);
    }
}

// Filter input scene for active mesh and return array
function getActiveMeshesFromScene(inputscene){
    const filteredNewMeshes = [];
    inputscene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
            // Check if the object is a mesh (which typically contains a geometry)
            const geometry = object.geometry;
            // Ensure the geometry is not null or undefined
            if (geometry) {
                // Add the mesh to the array of active meshes
                filteredNewMeshes.push(object);
            }
        }
    });
    return filteredNewMeshes;
}