import React, { Suspense } from 'react';
import {Canvas, useLoader} from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import texture1 from './TexturesCom_Ground_ForestClovers02_header.jpg';
import texture2 from './pexels-matheus-bertelli-4558481.jpg';
import {Model} from "./BlenderDraco"

export default function FirstCanvas() {
/*     useEffect(() => {


    }, []) */

    const colorMap = useLoader(TextureLoader, texture1);

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