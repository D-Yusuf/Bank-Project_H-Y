import React from 'react'

const Screen = ({children, className, direction, ...props}) => {

  return (
    <div className={`split ${direction} ${className}`} {...props}>
        {children}
    </div>
  )
}

export default Screen