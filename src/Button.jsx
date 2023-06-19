import React from 'react';

function Button({text, onClick}) {
    return (
    
      <div className="Button">
          <button onClick={onClick}>{text}</button>
      </div>
    );
  }
  
  export default Button;