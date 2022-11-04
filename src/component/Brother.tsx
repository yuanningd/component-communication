import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { update } from '../store/ brotherSlice';

export default function Brother() {
  // const [brotherState, setBrotherState] = useState(0);
  const brotherState = useSelector((state: RootState) => state.brother)
  const dispatch = useDispatch();
  return (
    <div>
      <p>Brother: I have a state, which equals to {brotherState}</p>
      <button onClick={() => dispatch(update())}>update brotherState</button>
    </div>
  )
}
