import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export default function GrandGrandChild() {
  const state = useSelector((state: RootState) => state.brother)
  return (
    <div>我想拿到我爷爷的父亲的兄弟的状态 { state }</div>
  )
}
