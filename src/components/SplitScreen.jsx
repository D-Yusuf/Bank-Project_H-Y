import React from 'react'

const SplitScreen = ({children}) => {
  return (
    <div>
        <div class="split left bg-main">
            {children}
        </div>

        <div class="split right bg-secondary">
        {/* put image here */}
        </div>

    </div>
  )
}

export default SplitScreen