import React, { Suspense } from 'react';
import  {Canvas} from "@react-three/fiber"
import { OrbitControls, Plane, softShadows } from '@react-three/drei';
import {Model} from "./BlenderDraco";
import * as THREE from "three"

export default function FirstCanvas() {
const plane = new THREE.MeshPhysicalMaterial();

plane.color = {
    r: 2,
    g: 0,
    b: 0,
}
plane.metalness = 1

console.log(plane)
    return <div className='cento'>
        <Suspense fallback={null}>
        <Canvas shadows className=' cento bg-white dark:bg-black justify-center items-center'>
            <directionalLight intensity={0.3} color="#fdd" position={[-0.5, 0, 1]} />
            <directionalLight intensity={0.3} color="#dcf" position={[0.5, 1, 1]} castShadow/>
            <directionalLight intensity={0.3} color="#fdd" position={[-0.5, 0, -1]} />
            <directionalLight intensity={0.3} color="#dcf" position={[0.5, 1, -1]} />
                <OrbitControls />
                <Model position={[0, -2.5, 0]} rotation={[0,3.2,0]} castShadow/>
                <Plane material={plane} opacity={0.5} position={[0, -2.54, 0]} args={[100,100]} rotation={[-1.58,0,0]} receiveShadow>
                </Plane>
        </Canvas>
            </Suspense>
    </div>
}