import {useRef, useEffect} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Scene = () => {
    const mountRef = useRef(null)

    useEffect(() => {
        const currentMount = mountRef.current;

        //Scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            25,
            currentMount.clientWidth / currentMount.clientHeight,
            0.1,
            1000
            ); 
        camera.position.z = 4;
        scene.add(camera);

        //Loader
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./amongus.gltf',
            (gltf) => {
                scene.add(gltf.scene);
            },
            () => {},
            () => {}
        ); 

        //Renderer
        const renderer = new  THREE.WebGLRenderer();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);

        currentMount.appendChild(renderer.domElement);

        //Controls
        const controls = new OrbitControls(camera,renderer.domElement); 
        controls.enableDamping = true;

        //Resize
        const resize = () => {
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
            camera.updateProjectionMatrix();
        }

        window.addEventListener('resize', resize);

        //Cube
        const textureLoaderCube = new THREE.TextureLoader();
        const mapCube = textureLoaderCube.load('./texture/Brick_Wall_018_basecolor.jpg');
        const aoMap = textureLoaderCube.load('./texture/Brick_Wall_018_ambientOcclusion.jpg');
        const roughnessMap = textureLoaderCube.load('./texture/Brick_Wall_018_roughness.jpg');
        const normalMap = textureLoaderCube.load('./texture/Brick_Wall_018_normal.jpg');
        const heightMap = textureLoaderCube.load('./texture/Brick_Wall_018_height.png');


        const geometryCube = new THREE.BoxBufferGeometry(1,1,1, 255, 255, 255);
        const materialCube = new THREE.MeshStandardMaterial({
            map:mapCube,
            aoMap:aoMap,
            roughnessMap:roughnessMap,
            normalMap:normalMap, 
            displacementMap:heightMap,
            displacementScale:0.04
        });
        const cube = new THREE.Mesh( geometryCube,materialCube);
        cube.position.set(0,-1,0);
        cube.scale.set(2,2,2);
        scene.add(cube);


        //Sphere
        const textureLoader = new THREE.TextureLoader();
        const matcap = textureLoader.load('./texture/mapcap1.jpeg')

        const geometry = new THREE.SphereGeometry( 0.8, 32, 16 );
        const material = new THREE.MeshMatcapMaterial( { matcap : matcap } );
        const sphere = new THREE.Mesh( geometry, material );
        scene.add( sphere );
        sphere.position.x = 1;
        sphere.position.z = -2;

        //TorusKnot
        const Thorus = new THREE.TorusKnotGeometry( 0.3, 0.1, 100, 16 );
        const materialThorus = new THREE.MeshNormalMaterial( { 
            color: 0xffff00,
            flatShading: true,
        } );
        const torusKnot = new THREE.Mesh( Thorus, materialThorus );
        scene.add( torusKnot );
        torusKnot.position.x = -2;

        const AO = new THREE.AmbientLight(0xffffff,1)
        scene.add(AO); 



        const enviromentMap = new THREE.CubeTextureLoader();
        const envMap = enviromentMap.load([
            './envmap/px.png',
            './envmap/nx.png',
            './envmap/py.png',
            './envmap/ny.png',
            './envmap/pz.png',
            './envmap/nz.png',
        ]);

        scene.environment = envMap;
        scene.background = envMap;

        //Render the scene
        const animate = () => {
            controls.update()
            renderer.render(scene,camera);
            requestAnimationFrame(animate);
        }
        animate();

        //Clean up scene
        return () => {
            currentMount.removeChild(renderer.domElement);
        }
    },[])

    return (<div
        className='3Dcontainer'
        ref={mountRef}
        style={{'width':'100%','height':'100vh '}}
    >
    </div>)
}

export default Scene