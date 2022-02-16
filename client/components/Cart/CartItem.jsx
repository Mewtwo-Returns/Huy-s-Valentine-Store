import React from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { removeItem, updateItemQuantity } from '../../slices/cartSlice';

const CartItem = ({item, id}) => {

  const dispatch = useDispatch();
  
  const deleteItem = () => {
    dispatch(removeItem(id));
  };

  const updateQuantity = (e) => {
    const newQuantity = e.target.value;
    dispatch(updateItemQuantity({id, newQuantity}));
  };

  return (
    <div id="item">
      <img id="cart-item-img" src={item.imgSrc} />
      <div id="item-info">
        <p id="item-name">{item.name}</p>
        <p id="item-price">${item.price}</p>
      </div>
      <div id="quantity-selector">
        <input type="number" id="quantity" name="quantity" value={item.quantity} min={1} onChange={(e) => updateQuantity(e)}/>
      </div>
      <div id="trash-icon">
        <IconContext.Provider value={{className: 'trash-icon', size:'1.5em'}}>
          <IoTrashOutline onClick={() => deleteItem()}/>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default CartItem;