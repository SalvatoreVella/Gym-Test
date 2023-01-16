import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Neo.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 4.24, 0.07]}
        rotation={[-1.52, 0, -Math.PI]}
        scale={0.24}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_002.geometry}
          material={materials.material}
        />
      </group>
      <group
        position={[0, 4.11, 0.07]}
        rotation={[-1.52, 0, -Math.PI]}
        scale={0.24}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_003.geometry}
          material={materials["material 1"]}
        />
      </group>
      <group
        position={[0, 4.01, 0.14]}
        rotation={[-1.52, 0, -Math.PI]}
        scale={0.13}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_004.geometry}
          material={materials["material 2"]}
        />
      </group>
      <group
        position={[0, 3.45, 0.11]}
        rotation={[-1.52, 0, -Math.PI]}
        scale={0.43}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_006.geometry}
          material={materials["material 3"]}
        />
      </group>
      <group
        position={[0, 2.6, 0.08]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[0.43, 0.43, 0.3]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_007.geometry}
          material={materials["material 4"]}
        />
      </group>
      <group
        position={[0, 2.9, 0.08]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.3}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.addome.geometry}
          material={materials["material 5"]}
        />
      </group>
      <group
        position={[0, 3.03, 0.08]}
        rotation={[-1.55, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
        onClick={() => console.log("bicipiti")}
          castShadow
          receiveShadow
          geometry={nodes.bicipiti.geometry}
          material={materials["material 6"]}
        />
      </group>
      <group
        position={[0, 2.52, -0.01]}
        rotation={[-1.55, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avambracci.geometry}
          material={materials["material 7"]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.26}>
        <mesh
        onClick={() => console.log("bicipiti femorali")}
          castShadow
          receiveShadow
          geometry={nodes["bicipiti-femorali"].geometry}
          material={materials["material 8"]}
        />
      </group>
      <group
        position={[0, 0.67, 0.08]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polpacci2.geometry}
          material={materials["material 9"]}
        />
      </group>
      <group
        position={[0, 3.58, 0.12]}
        rotation={[-1.52, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.spalle3.geometry}
          material={materials["material 10"]}
        />
      </group>
      <group
        position={[0, 3.7, 0.32]}
        rotation={[-1.52, 0, -Math.PI]}
        scale={0.13}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.trapezio.geometry}
          material={materials["material 11"]}
        />
      </group>
      <group
        position={[0, 3.49, 0.37]}
        rotation={[-1.52, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dorsali.geometry}
          material={materials["material 12"]}
        />
      </group>
      <group
        position={[0, 3.49, 0.37]}
        rotation={[-1.52, 0, -Math.PI]}
        scale={0.11}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.scapole2.geometry}
          material={materials["material 13"]}
        />
      </group>
      <group
        position={[0, 3.52, -0.15]}
        rotation={[-1.52, 0, -Math.PI]}
        scale={0.11}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pettorali.geometry}
          material={materials["material 14"]}
        />
      </group>
      <group
        position={[0, 4.01, 0.14]}
        rotation={[-1.52, 0, -Math.PI]}
        scale={0.13}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.collo.geometry}
          material={materials["material 15"]}
        />
      </group>
      <group
        position={[0, 4.66, 0.1]}
        rotation={[-1.52, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_007_001.geometry}
          material={materials["material 16"]}
        />
      </group>
      <group
        position={[0, 3.78, -0.06]}
        rotation={[-1.52, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_008_001.geometry}
          material={materials["material 17"]}
        />
      </group>
      <group
        position={[0, 3.09, -0.15]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.19}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.addominali2.geometry}
          material={materials["material 18"]}
        />
      </group>
      <group
        position={[0, 3.09, 0.24]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.09}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lombari.geometry}
          material={materials["material 19"]}
        />
      </group>
      <group
        position={[0, 3.49, 0.37]}
        rotation={[-1.52, 0, -Math.PI]}
        scale={0.11}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.scapole.geometry}
          material={materials["material 20"]}
        />
      </group>
      <group
        position={[0, 2.6, 0.21]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[0.43, 0.43, 0.3]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glutei.geometry}
          material={materials["material 21"]}
        />
      </group>
      <group
        position={[0, 2.85, 0.08]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.13}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fianchi.geometry}
          material={materials["material 22"]}
        />
      </group>
      <group
        position={[0, 2.39, -0.03]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.13}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_028.geometry}
          material={materials["material 23"]}
        />
      </group>
      <group
        position={[0, 1.63, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_013.geometry}
          material={materials["material 24"]}
        />
      </group>
      <group
        position={[0, 0.35, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_014.geometry}
          material={materials["material 25"]}
        />
      </group>
      <group
        position={[0, 3.58, 0.12]}
        rotation={[-1.52, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.spalle2.geometry}
          material={materials["material 26"]}
        />
      </group>
      <group
        position={[0, 3.58, 0.12]}
        rotation={[-1.52, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.spalle1.geometry}
          material={materials["material 27"]}
        />
      </group>
      <group
        position={[0, 3.03, 0.1]}
        rotation={[-1.55, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_017.geometry}
          material={materials["material 28"]}
        />
      </group>
      <group
        position={[0.06, 2.63, 0.08]}
        rotation={[-1.55, 0, -Math.PI]}
        scale={0.13}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_018.geometry}
          material={materials["material 29"]}
        />
      </group>
      <group
        position={[0, 2.52, -0.01]}
        rotation={[-1.55, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_019.geometry}
          material={materials["material 30"]}
        />
      </group>
      <group
        position={[0, 1.85, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.quadricipitiprinc.geometry}
          material={materials["material 31"]}
        />
      </group>
      <group
        position={[0, 0.67, 0.08]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_021.geometry}
          material={materials["material 32"]}
        />
      </group>
      <group
        position={[0, 1.63, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_022.geometry}
          material={materials["material 33"]}
        />
      </group>
      <group
        position={[0, 1.63, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_023.geometry}
          material={materials["material 34"]}
        />
      </group>
      <group
        position={[0, 0.35, -0.15]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_024.geometry}
          material={materials["material 35"]}
        />
      </group>
      <group
        position={[0, 2.66, 0.08]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.13}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_025.geometry}
          material={materials["material 36"]}
        />
      </group>
      <group
        position={[0, 2.52, -0.01]}
        rotation={[-1.55, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_026_001.geometry}
          material={materials["material 37"]}
        />
      </group>
      <group
        position={[0, 3.03, 0.1]}
        rotation={[-1.55, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_027.geometry}
          material={materials["material 38"]}
        />
      </group>
      <group
        position={[0, 2.82, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_028_001.geometry}
          material={materials["material 39"]}
        />
      </group>
      <group
        position={[0, 3.1, 0.04]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.3}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.addominali.geometry}
          material={materials["material 40"]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.26}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.quadricipiti.geometry}
          material={materials["material 41"]}
        />
      </group>
      <group
        position={[0, 0.01, -0.26]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_030.geometry}
          material={materials["material 42"]}
        />
      </group>
      <group
        position={[0, 0.67, 0.07]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polpacci.geometry}
          material={materials["material 43"]}
        />
      </group>
      <group
        position={[0, 4.36, 0.08]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.14}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_032.geometry}
          material={materials["material 44"]}
        />
      </group>
      <group
        position={[0, 4.01, 0.14]}
        rotation={[-1.52, 0, -Math.PI]}
        scale={0.13}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_060.geometry}
          material={materials["material 45"]}
        />
      </group>
      <group
        position={[0, 3.03, 0.1]}
        rotation={[-1.55, 0, -Math.PI]}
        scale={0.26}
      >
        <mesh
        onClick={() => console.log("tricipiti")}
          castShadow
          receiveShadow
          geometry={nodes.tricipiti.geometry}
          material={materials["material 46"]}
        />
      </group>
      <group
        position={[0, 4.15, -0.17]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.07}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_068.geometry}
          material={materials["material 47"]}
        />
      </group>
      <group
        position={[0, 4.22, -0.17]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.07}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.group_ME_Cube_069.geometry}
          material={materials["material 48"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Neo.glb");