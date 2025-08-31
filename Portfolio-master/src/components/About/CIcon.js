// CIcon.js
import React from "react";

const CIcon = (props) => (
  <svg
    viewBox="0 0 128 128"
    fill="currentColor"
    width="1em"
    height="1em"
    style={{ display: "inline-block", verticalAlign: "middle" }}
    {...props}
  >
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dy=".35em"
      fontSize="90"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
    >
      C
    </text>
  </svg>
);

export default CIcon;
