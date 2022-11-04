import React, { createContext, ReactNode, useState } from "react";

interface IBrotherContext {
  brotherState: number;
  update: () => void
}

export const BrotherContext = createContext({} as IBrotherContext);

export const BrotherContextProvider = ({ children }:{ children: ReactNode }) => {
  const [state, setState] = useState(0);

  const update = () => setState(prev => prev + 1);

  const brotherContext = {brotherState:state, update}

  return (
    <BrotherContext.Provider value={brotherContext}>
      {children}
    </BrotherContext.Provider>
  )
}