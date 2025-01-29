import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const ButtonTS: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} >
      {children}
    </button>
  );
};

export default ButtonTS;