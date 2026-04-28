'use client'
import React, { ReactNode } from 'react'
import { store } from '../store'
import { Provider } from 'react-redux'


type children= {
 children: ReactNode
}

const StoreProvider = ({children}: children) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default StoreProvider
