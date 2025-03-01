import React from "react";

const RotatingCircles = ({className}) => {
  return (
    <svg className={`rotating-svg ${className}`} viewBox="0 0 300 300">
      <g transform="translate(150,150)">
        <circle cx="0" cy="0" r="50" stroke="rgba(136, 86, 222, 0.1)" fill="none" strokeWidth="2"/>
        <circle cx="0" cy="0" r="70" stroke="rgba(136, 86, 222, 0.2)" fill="none" strokeWidth="2"/>
        <circle cx="0" cy="0" r="90" stroke="rgba(136, 86, 222, 0.3)" fill="none" strokeWidth="2"/>
        <circle cx="0" cy="0" r="110" stroke="rgba(136, 86, 222, 0.4)" fill="none" strokeWidth="2"/>
        <circle cx="0" cy="0" r="130" stroke="rgba(136, 86, 222, 0.5)" fill="none" strokeWidth="2"/>
      </g>
    </svg>
  );
};

export default RotatingCircles;
