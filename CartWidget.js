import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './App.css'; 

const CartWidget = () => {
  return (
    <div className="cart-section">
      <div className='carrito'>
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
      <div className="circle">3</div>
    </div>
  );
}

export default CartWidget;
