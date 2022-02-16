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
            <Card sx={{ maxWidth: 320 }}>
                <CardMedia
                    component="img"
                    height="120"
                    image={props.image}
                    image='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/274151068_5048959448503143_3787574081341773627_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=R0w8zMeDYRAAX-Y7m1d&tn=qWcAyokT1n4vRkP4&_nc_ht=scontent-lga3-1.xx&oh=00_AT9FjiX4AuSbUdkm1larwO5kX8afwblyN4apXzvYulQx_g&oe=6212382B'
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
                </CardActions>
            </Card>
        </div>
    );
};

export default ProductCard;