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
// import huy from 'https://1drv.ms/u/s!At_IzgfLhlEOgn3GwKuGwh3ICIUJ'
import huy from './public/huywillstretchyoushirt.PNG'
// import ./public/huywillstretchyoushirt.PNG from './public/huywillstretchyoushirt.PNG'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../slices/userSlice';

const ProductCard = (props) => {

    // { props } : { props: any }
    // const { 
    //     product,
    //     image,
    //     description,
    //     price
    // } : {
    //     product: string,
    //     image: string,
    //     description: string,
    //     price: number;
    // } = props;

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.user.cart);

    const addCart = (item) => {
        dispatch(addToCart(item));
        console.log(cart);
    };

    const removeCart = (item) => {
        dispatch(removeFromCart(item));
    };

    return(
        <div className="card-container">
            {/* <img src={require('./public/huywillstretchyoushirt.PNG')} /> */}
            // <img src={'./public/huywillstretchyoushirt.PNG'} />
            <Card sx={{ maxWidth: 320 }}>
                <CardMedia
                    component="img"
                    height="120"
                    image={props.image}
                    image={huy}
                    // image={require('./public/huywillstretchyoushirt.PNG')}
                    alt={props.product}
                />
                <CardContent>
                    <h5 className="card-title-container">
                    <div className="card-title">{props.product}</div>
                    <div className="card-title">{props.price}</div>
                    </h5>
                    <Typography variant="body2" color="text.secondary">
                    <div class="description-text">{props.description}</div>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium" variant="contained" onClick={() => addCart(props.product)}>Add To Cart</Button>
                    {/* <Button size="medium" variant="outlined" onClick={() => removeCart(props.product)}>Remove</Button> */}
                </CardActions>
            </Card>
        </div>
    );
};

export default ProductCard;