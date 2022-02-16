// import axios, { AxiosResponse } from 'axios';
// import { useState, useEffect } from 'react';
import React from 'react';
import '../../styles/product.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart} from '../slices/cartSlice';

const ProductCard = (props) => {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.user.cart);

  const addCart = (item, price, quantity, image) => {
    dispatch(addToCart({name: item, price: price, quantity: quantity, imgSrc: image}));
    console.log(cart);
  };

  return(
    <div className="card-container" style={{ marginTop: 70}}>
      <Card sx={{ minWidth: 400, maxWidth: 400}}>
        <div className="image-container">
          <CardMedia
            component="img"
            // height="auto"
            image={props.image}
            alt={props.product}
            sx={{ minHeight: 300, maxHeight: 300, objectFit: 'contain' }}
          />
        </div>
        <CardContent>
          <h5 className="card-title-container">
            <div className="card-title">{props.product}</div>
            <div className="card-title">${props.price}</div>
          </h5>
          <Typography variant="body2" color="text.secondary" className="description-container">
            <div className="description-text">{props.description}</div>
          </Typography>
        </CardContent>
        <CardActions className="card-container">
          <button onClick={() => addCart(props.product, props.price, 1, props.image)} className='btn'>Add To Cart</button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;