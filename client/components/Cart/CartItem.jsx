import React from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { useSelector, useDispatch } from 'react-redux';

const CartItem = ({item}) => {
  return (
    <div id="item">
      <img id="cart-item-img" src={item.imgSrc} />
      <div id="item-info">
        <p id="item-name">{item.name}</p>
        <p id="item-price">${item.price}</p>
      </div>
      <div id="quantity-selector">
        <input type="number" id="quantity" name="quantity" placeholder='1' min="1"/>
      </div>
      <div id="trash-icon">
        <IconContext.Provider value={{className: 'trash-icon', size:'1.5em'}}>
          <IoTrashOutline />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default CartItem;