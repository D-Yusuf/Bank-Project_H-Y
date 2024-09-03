import React from "react";

const SplitScreen = ({ children }) => {
  return (
    <div>
      <div className="split left bg-main">{children}</div>

      <div className="split right bg-secondary">{/* put image here */}</div>
    </div>
  );
};

export default SplitScreen;
