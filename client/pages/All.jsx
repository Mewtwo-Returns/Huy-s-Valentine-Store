// import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
// import '../../../styles/productStyles.css';
import ProductCard from '../components/ProductCard';

const All = () => {

    const [fetched, setFetched] = useState(false);
    const[productList, setProductList] = useState('');

    const getProducts = async () => {
        // return await axios.get('/api/products')

        const products = await fetch(`http://localhost:3000/api/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(data => data.json())
            .catch(error => console.log('This is the error,', error))
        return products;
    };

    useEffect(() => {
        // const result = [];
        // const products = getProducts();

        // for (let i = 0; i < products.length; i++){
        //     result.push(<ProductCard
        //         key={i}
        //         product={product_name}
        //         image={image_url}
        //         price={price}
        //         description={product_description}
        //     />);
        // };
        // setFetched(true);
        // console.log(fetched);
        console.log(getProducts());
        setFetched(true);
    });

    return(
        <div>
            all page
            {/* {fetched ? <>{productList}</> : ''} */}
        </div>
    );
};

export default All;