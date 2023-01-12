/*
This file was generated by https://github.com/pmndrs/gltfjsx and then
customized manually. It uses drei's new useAnimations hook which extracts
all actions and sets up a THREE.AnimationMixer for it so that you don't have to.
All of the assets actions, action-names and clips are available in its output. 
*/

import React from "react"


import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'



export default function Model(props) {
    // Fetch model and a separate texture

    const isSSR = typeof window === "undefined"


    if (!isSSR) {


        const { nodes, materials, scene } = useLoader(GLTFLoader, '/eye.glb')



        return (
            <group {...props} dispose={null}>
                <group>
                    <primitive scale={0.8} object={scene}>
                    </primitive>
                </group>
            </group >
        )
    } else {
        return (<></>)
    }
}
