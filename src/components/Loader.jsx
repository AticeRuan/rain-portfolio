import React from 'react'
import Logo from './svg/logo'

const Loader = () => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center animate-bounce">
      <Logo width="100" height="100" />

      <p className="text-xl uppercase animate-pulse">Loading...</p>
    </div>
  )
}

export default Loader
