// Listening to a global browser event 

import React, { useEffect, useState } from 'react'
import { useWindowListener } from './useWindowListener.js'

export default function UseEffectExerciseTwo() {

    const [ position, setPosition] = useState({ x: 0, y: 0})

    useWindowListener('pointermove', (e) => {
        setPosition({ x: e.clientX, y: e.clientY})
    })

  return (
    <div
        style={{
            position: 'absolute',
            backgroundColor: 'yellow',
            borderRadius: '50%',
            opacity: 0.6,
            transform: `translate(${position.x}px, ${position.y}px)`,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40
        }}
    />
  )
}
