import React from 'react'

const Screen = ({children, className, direction, width, height, ...props}) => {
  const widthClass = "w-[" + width + "]"
  const heightClass = "h-[" + height + "]"
  console.log(widthClass, width)
  console.log(heightClass, height)
  return (
    <div className={`split ${widthClass} ${heightClass} ${direction} ${className}`} {...props}>
        {children}
    </div>
  )
}

export default Screen