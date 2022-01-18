import React from 'react';

const Button = ({ onClick, className, outline, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
