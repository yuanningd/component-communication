import React, { useState } from 'react'

export default function Brother() {
  const [brotherState, setBrotherState] = useState(0);
  return (
    <div>
      <p>Brother: I have a state, which equals to {brotherState}</p>
      <button onClick={() => setBrotherState(pre => pre + 1)}>update brotherState</button>
    </div>
  )
}
