import React from 'react';
import Button from './Button'; // Importa el componente Button

const DivWithButton = () => {
    return (
        <div>
            <h2>This is a Div with a button</h2>
               <Button onClick={() => alert('Buton inside Div clicked!')}>
                    Clic here
                </Button>
            

        </div>
    );
};

export default DivWithButton;