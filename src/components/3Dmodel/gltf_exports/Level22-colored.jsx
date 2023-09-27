/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 level22-colored.gltf --transform
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/glb/level22-colored-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (props.play) {
      actions["KeyAction.001"].play();
    }
  }, [props.play]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="result_022">
          <mesh
            name="result-5_030"
            geometry={nodes["result-5_030"].geometry}
            material={materials["stem.001"]}
            morphTargetDictionary={nodes["result-5_030"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-5_030"].morphTargetInfluences}
          />
          <mesh
            name="result-5_030_1"
            geometry={nodes["result-5_030_1"].geometry}
            material={materials.fruit_green}
            morphTargetDictionary={
              nodes["result-5_030_1"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_030_1"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_030_2"
            geometry={nodes["result-5_030_2"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_030_2"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_030_2"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_030_3"
            geometry={nodes["result-5_030_3"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_030_3"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_030_3"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_030_4"
            geometry={nodes["result-5_030_4"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_030_4"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_030_4"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_030_5"
            geometry={nodes["result-5_030_5"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_030_5"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_030_5"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_030_6"
            geometry={nodes["result-5_030_6"].geometry}
            material={materials["stem.001"]}
            morphTargetDictionary={
              nodes["result-5_030_6"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_030_6"].morphTargetInfluences
            }
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/level22-colored-transformed.glb");
