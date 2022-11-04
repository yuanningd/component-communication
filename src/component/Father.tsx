import React from 'react'
import { BrotherContextProvider } from '../context/BroderContext';
import Brother from './Brother';
import LittleBrother from './LittleBrother';

const Father = () => {
  return (
    <BrotherContextProvider>
      <Brother />
      <LittleBrother />
    </BrotherContextProvider>
  )
}

export default Father;