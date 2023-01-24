import React, { Suspense } from 'react';
import  {Canvas} from "@react-three/fiber"
import { OrbitControls, Plane } from '@react-three/drei';
import {BodyModel} from "./BodyModel";
import * as THREE from "three"
import { CircleGeometry } from 'three';

export default function FirstCanvas() {
const plane = new THREE.MeshPhysicalMaterial();

plane.color = {
    r: 1,
    g: 0,
    b: 0,
}
plane.metalness = 1
plane.opacity = 0
console.log(plane)
    return <div className='cento'>
        <Suspense fallback={null}>
        <Canvas shadows className=' cento bg-white dark:bg-black justify-center items-center'>
            <directionalLight intensity={0.3} color="#fdd" position={[-0.5, 0, 1]} />
            <directionalLight intensity={0.3} color="#dcf" position={[0.5, 1, 1]} castShadow/>
            <directionalLight intensity={0.3} color="#fdd" position={[-0.5, 0, -1]} />
            <directionalLight intensity={0.3} color="#dcf" position={[0.5, 1, -1]} />
                <OrbitControls />
                <BodyModel position={[0, -2.5, 0]} rotation={[0,3,0]} castShadow/>
                <Plane radius={5} blur={1} material={plane} opacity={0.5} position={[0, -2.54, 0]} args={[100,100]} rotation={[-1.58,0,0]} receiveShadow>
                </Plane>
        </Canvas>
            </Suspense>
    </div>
}