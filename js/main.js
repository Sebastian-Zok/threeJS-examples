<<<<<<< HEAD
var keyboard = new THREEx.KeyboardState();
var clock = new THREE.Clock();

function main() {

    var scene = new THREE.Scene();
    var gui = new dat.GUI();

    var box = generateBox(1, 1, 1);
    box.name = 'box-1';
    box.translateZ(-(box.geometry.parameters.height / 2));
    var floor = generateFloor(10, 10);
    floor.name = 'floor';
    floor.rotation.x = Math.PI / 2;
    floor.add(box);
    scene.add(floor);
 

    var filenames = ['back', 'bottom', 'front', 'left', 'right', 'top'];
    var reflectionCube = new THREE.CubeTextureLoader().load(filenames.map(
        function(filename) {
            return 'skybox/' + filename + '.png';
        }
    ));
    scene.background = reflectionCube;



    var plight = generatePointLight(0xffffff, 1);
    plight.position.y = 5;
    gui.add(plight, 'intensity', 0, 20);
    scene.add(plight);




    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / innerHeight, 1, 1000);               // FOV / RATIO / CLIPPING-PLANES
    camera.position.x = 1;
    camera.position.y = 5;
    camera.position.z = 5;
    camera.lookAt(new THREE.Vector3(0, 0, -5));

    var renderer = new THREE.WebGLRenderer();   // WebGL REnderer nutzt Graka

    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor('rgb(60,150,60)')
    document.getElementById('webgl').appendChild(renderer.domElement);


    var controls = new THREE.OrbitControls(camera, renderer.domElement)
    update(renderer, scene, camera, controls);
}

function generateFloor(w, d) {

    var geo = new THREE.PlaneGeometry(w, d);
    var mat = new THREE.MeshPhongMaterial({ color: 'rgb(100,100,100)', side: THREE.DoubleSide });
    var mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    return mesh;

}


function generatePointLight(color, intensity) {
    var light = new THREE.PointLight(color, intensity);
    light.castShadow = true;
    return light
}


function generateBox(w, h, d) {
    var geo = new THREE.BoxGeometry(w, h, d);
    var mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    return mesh;
}


function update(renderer, scene, camera, controls) {
    renderer.render(scene, camera);

    scene.traverse(function (child) {
        // child.rotation.z += 0.01;
    })


    controls.update();

    var step = 5 * clock.getDelta();

    var box = scene.getObjectByName('box-1');
    if (keyboard.pressed("A")) {
        box.translateX(-step);

    }
    if (keyboard.pressed("D")) {
        box.translateX(step);

    }

    requestAnimationFrame(function () { update(renderer, scene, camera, controls) });

}


=======
var keyboard = new THREEx.KeyboardState();
var clock = new THREE.Clock();

function main() {

    var scene = new THREE.Scene();
    var gui = new dat.GUI();

    var box = generateBox(1, 1, 1);
    box.name = 'box-1';
    box.translateZ(-(box.geometry.parameters.height / 2));
    var floor = generateFloor(10, 10);
    floor.name = 'floor';
    floor.rotation.x = Math.PI / 2;
    floor.add(box);
    scene.add(floor);
 

    var filenames = ['back', 'bottom', 'front', 'left', 'right', 'top'];
    var reflectionCube = new THREE.CubeTextureLoader().load(filenames.map(
        function(filename) {
            return 'skybox/' + filename + '.png';
        }
    ));
    scene.background = reflectionCube;



    var plight = generatePointLight(0xffffff, 1);
    plight.position.y = 5;
    gui.add(plight, 'intensity', 0, 20);
    scene.add(plight);




    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / innerHeight, 1, 1000);               // FOV / RATIO / CLIPPING-PLANES
    camera.position.x = 1;
    camera.position.y = 5;
    camera.position.z = 5;
    camera.lookAt(new THREE.Vector3(0, 0, -5));

    var renderer = new THREE.WebGLRenderer();   // WebGL REnderer nutzt Graka

    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor('rgb(60,150,60)')
    document.getElementById('webgl').appendChild(renderer.domElement);


    var controls = new THREE.OrbitControls(camera, renderer.domElement)
    update(renderer, scene, camera, controls);
}

function generateFloor(w, d) {

    var geo = new THREE.PlaneGeometry(w, d);
    var mat = new THREE.MeshPhongMaterial({ color: 'rgb(100,100,100)', side: THREE.DoubleSide });
    var mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    return mesh;

}


function generatePointLight(color, intensity) {
    var light = new THREE.PointLight(color, intensity);
    light.castShadow = true;
    return light
}


function generateBox(w, h, d) {
    var geo = new THREE.BoxGeometry(w, h, d);
    var mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    return mesh;
}


function update(renderer, scene, camera, controls) {
    renderer.render(scene, camera);

    scene.traverse(function (child) {
        // child.rotation.z += 0.01;
    })


    controls.update();

    var step = 5 * clock.getDelta();

    var box = scene.getObjectByName('box-1');
    if (keyboard.pressed("A")) {
        box.translateX(-step);

    }
    if (keyboard.pressed("D")) {
        box.translateX(step);

    }

    requestAnimationFrame(function () { update(renderer, scene, camera, controls) });

}


>>>>>>> c05087ee7ecb30c7a45beffa4dbc4476ee8a5703
main();