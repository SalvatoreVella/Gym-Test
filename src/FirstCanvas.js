import React, { Suspense } from 'react';
import {Canvas} from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei';
import {Model} from "./BlenderDraco";

export default function FirstCanvas() {

    return <div className='cento'>
        <Suspense fallback={null}>
        <Canvas className=' cento bg-slate-400 justify-center items-center'>
            <directionalLight intensity={0.5} color="#ffeeee" position={[-2, 5, -5]} />
            <directionalLight intensity={0.5} color="#ffeeee" position={[-2, 5, 5]} />
                <OrbitControls />
                <Model position={[0, -2.5, 0]}/>
        </Canvas>
            </Suspense>
    </div>
}