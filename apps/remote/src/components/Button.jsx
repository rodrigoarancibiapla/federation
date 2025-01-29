import React from 'react';

const Button = ({ onClick, children }) => {
    return (
        <div className="button-wrapper">
            <button onClick={onClick} className="button">
                {children}
            </button>
        </div>
    );
};

export default Button;
