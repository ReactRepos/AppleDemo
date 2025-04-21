import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html>
      <div className='absolute top-0 left-0 justify-center items-center flex w-full h-full'>
        <div className='rounded-full h-[10vw] w-[10vw]'>Loading</div>
      </div>
    </Html>
  )
}

export default Loader