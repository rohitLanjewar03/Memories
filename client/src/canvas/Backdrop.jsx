import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { useRef } from "react"
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei"


const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      position={[0,0,-0.14]}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={2}
      rotation={[Math.PI/2, 0, 0]} 
      
    >
      <RandomizedLight
        amount={5}
        radius={9}
        intensity={3}
        ambient={0.7}
        position={[5,5,-10]}
        bias={0.001} 
      />
      <RandomizedLight
        amount={3}
        radius={5}
        intensity={1.5}
        ambient={0.5}
        position={[-5,5,-9]}
        bias={0.001} 
      />
    </AccumulativeShadows>
  )
}

export default Backdrop