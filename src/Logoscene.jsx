import React, { useEffect, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const ObjModel = ({url, color}) => {
    const obj = useLoader(OBJLoader, url);
    const ref = useRef();
    //const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (obj && ref.current) {
          // Apply transformations only if obj and ref.current are valid
          ref.current.traverse(child => {
            if (child.isMesh) {
              child.material = new THREE.MeshStandardMaterial({ color });
            }
          });

          //const handleMouseMove = (event) => {
            //setMouse({
              //x: (event.clientX / window.innerWidth) * 2 - 1, // Normalize between -1 and 1
              //y: -(event.clientY / window.innerHeight) * 2 + 1, // Normalize between -1 and 1
            //});
          //};

          

          
    
          // Center the model
          const box = new THREE.Box3().setFromObject(obj);
          const size = box.getSize(new THREE.Vector3());
          const center = box.getCenter(new THREE.Vector3());
    
          obj.position.sub(center); // Center the model
          ref.current.position.copy(obj.position); // Set the position of the ref object
          
    
          // Rotate the model 90 degrees around the Y-axis
          //ref.current.rotation.y = Math.PI / 2; // 90 degrees in radians
          //ref.current.rotation.x = Math.PI / -2;

          const scaleFactor = 10 / size.length();
          ref.current.scale.set(scaleFactor, scaleFactor, scaleFactor);

          //window.addEventListener('mousemove', handleMouseMove);
          //return () => window.removeEventListener('mousemove', handleMouseMove);

          

          obj.position.y += 1;
          //obj.position.z += 1;
          obj.position.x += 11;
        }
      }, [obj, color]);

      useFrame(() => {
        if (ref.current) {
          // Rotate the object around the Y-axis
          ref.current.rotation.x += 0.01; // Adjust the rotation speed as needed
        }
      });

      //useFrame(() => {
        //if (ref.current) {
          //ref.current.rotation.x = mouse.y * Math.PI; // Rotate based on Y-axis
          //ref.current.rotation.y = mouse.x * Math.PI; // Rotate based on X-axis
        //}
      //});


    return <primitive ref={ref} object={obj} />;
    
};

export function Logoscene() {

    
    return (
        <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        >
            
            <ambientLight intensity = {.5} />
            <directionalLight
             position={[10, 10, 5]}
             intensity={3}
             castShadow
             shadow-mapSize-width={1024}
             shadow-mapSize-height={1024}
             shadow-camera-near={0.5}
             shadow-camera-far={500}
             shadow-camera-left={-50}
             shadow-camera-right={50}
             shadow-camera-top={50}
             shadow-camera-bottom={-50}
            />

            <pointLight position={[10, 10, 10]} intensity={1} />
            <ObjModel url="/MonarcaObjW.obj" color='orange'/>
            
            
        </Canvas>
        
    );
};