import React, { useContext, useState } from 'react'
import { BrotherContext } from '../context/BroderContext'

export default function Brother() {
  // const [brotherState, setBrotherState] = useState(0);
  const {brotherState, update} = useContext(BrotherContext)
  return (
    <div>
      <p>Brother: I have a state, which equals to {brotherState}</p>
      <button onClick={update}>update brotherState</button>
    </div>
  )
}
