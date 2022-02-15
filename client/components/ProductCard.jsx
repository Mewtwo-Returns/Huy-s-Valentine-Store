// import axios, { AxiosResponse } from 'axios';
// import { useState, useEffect } from 'react';
import React from 'react';
import '../../styles/_reset.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import huy from '../../public/huywillstretchyoushirt.PNG'
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
            
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    // image={props.image}
                    image={huy}
                    // alt={props.product}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex'}}>
                        {/* <div class="card-title">Will</div> */}
                        {/* sx={{ justify-content: 'space-between' }} */}
                    {/* {props.product}Will */}
                    <div class="card-title">Will</div>
                    <div class="card-title">Price</div>
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                    {/* <div class="card-title">Price</div> */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {/* {props.description}description */}description here
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained">Add</Button>
                    <Button size="small" variant="outlined">Delete</Button>
                </CardActions>
        </Card>


        </div>

    )

}


export default ProductCard;