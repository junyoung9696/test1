/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 level30-whitefruit.gltf --transform
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/glb/level30-whitefruit-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);

  const stemMaterial = materials.stem.clone();
  stemMaterial.color.set(props.stemColor);

  const leafMaterial = materials.leaf_disease.clone();
  leafMaterial.color.set(props.leafColor);

  const fruitMaterial = materials.fruit_white.clone();
  fruitMaterial.color.set(props.fruitColor);

  materials.stem = stemMaterial;
  materials.leaf_disease = leafMaterial;
  materials.fruit_white = fruitMaterial;

  useEffect(() => {
    actions["Key.021Action"].play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="result_030">
          <mesh
            name="result-5_013"
            geometry={nodes["result-5_013"].geometry}
            material={materials.stem}
            morphTargetDictionary={nodes["result-5_013"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-5_013"].morphTargetInfluences}
          />
          <mesh
            name="result-5_013_1"
            geometry={nodes["result-5_013_1"].geometry}
            material={materials.fruit_white}
            morphTargetDictionary={
              nodes["result-5_013_1"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_013_1"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_013_2"
            geometry={nodes["result-5_013_2"].geometry}
            material={materials.leaf_disease}
            morphTargetDictionary={
              nodes["result-5_013_2"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_013_2"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_013_3"
            geometry={nodes["result-5_013_3"].geometry}
            material={materials.leaf_disease}
            morphTargetDictionary={
              nodes["result-5_013_3"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_013_3"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_013_4"
            geometry={nodes["result-5_013_4"].geometry}
            material={materials.leaf_disease}
            morphTargetDictionary={
              nodes["result-5_013_4"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_013_4"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_013_5"
            geometry={nodes["result-5_013_5"].geometry}
            material={materials.leaf_disease}
            morphTargetDictionary={
              nodes["result-5_013_5"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_013_5"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_013_6"
            geometry={nodes["result-5_013_6"].geometry}
            material={materials.stem}
            morphTargetDictionary={
              nodes["result-5_013_6"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_013_6"].morphTargetInfluences
            }
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/level30-whitefruit-transformed.glb");
