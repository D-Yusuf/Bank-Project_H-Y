import React from "react";
import Screen from "./Screen";
const SplitScreen = ({ children, className, ...props }) => {

  return(
    <div className={className} {...props}>
      {children}
    </div>
  )
   
};

export default SplitScreen;
