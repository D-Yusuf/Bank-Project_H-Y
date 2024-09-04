import React from "react";

const SplitScreen = ({ children, inverted = false, secondScreenContent = '', secondScreenClassName, secondScreenWidth = "50%" }) => {
    // inverted (its a prop that has a default value of false if user didnt input a value for it)
  return !inverted ? (
    
    <div>
        <div className="split w-1/3 left bg-main">{children}</div>

        <div className={`split right w-[${secondScreenWidth}] bg-secondary ${secondScreenClassName}`}>
            {secondScreenContent}
        </div>
    </div>
  ) : (
    <div>
        <div className="split right bg-main">{children}</div>

        <div className={`split left bg-secondary  ${secondScreenClassName}`}>
            {secondScreenContent}
        </div>
    </div>
  )
};

export default SplitScreen;
