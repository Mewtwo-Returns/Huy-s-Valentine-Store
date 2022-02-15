// import axios, { AxiosResponse } from 'axios';
// import { useState, useEffect } from 'react';
import React from 'react';
import '../../styles/productStyles.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import huy from '../../public/huywillstretchyoushirt.PNG'

const ProductCard = () => {
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

    // useEffect(() => {
    //     axios
    //    .post<Product[]>(uri, body)
    //   .then(({ data }: AxiosResponse<any>) => {





    // })

    return(

        <div>
            
            <Card sx={{ maxWidth: 320 }}>
                <CardMedia
                    component="img"
                    height="120"
                    // image={props.image}
                    image={huy}
                    // alt={props.product}
                />
                <CardContent>
                    <h5 class="card-title-container">
                    {/* {props.product} {props.price}*/}
                    <div class="card-title">Will</div>
                    <div class="card-title">Price</div>
                    </h5>
                    <Typography variant="body2" color="text.secondary">
                    {/* {props.description}*/}<div class="description-text">description here</div>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium" variant="contained">Add To Cart</Button>
                    <Button size="medium" variant="outlined">Remove</Button>
                </CardActions>
        </Card>


        </div>

    )

}


export default ProductCard;