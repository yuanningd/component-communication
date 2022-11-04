import React, { useContext } from 'react'
import { BrotherContext } from '../context/BroderContext'

export default function LittleBrother() {
  const {brotherState} = useContext(BrotherContext)
  return (
    <div className='mt-2'>
      <p>LittleBrother: I want to show my big brother's state here</p>
      {' '+brotherState}
    </div>
  )
}
