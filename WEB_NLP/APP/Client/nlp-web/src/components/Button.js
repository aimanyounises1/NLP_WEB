import React ,{useState, useEffect}from 'react';
function Button(props) {
    const toggleModal = () => {  
       props.clicked(true);
    }
    return (
        <div>
               <button onClick={toggleModal} className="button">
                    Sign in
                  </button>
        </div>
    )
}

export default Button
