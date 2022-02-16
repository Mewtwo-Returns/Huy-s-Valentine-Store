// import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import '../../styles/page.css';
import ProductCard from '../components/ProductCard';

const Shop = (props) => {

    const [fetched, setFetched] = useState(false);
    const[productList, setProductList] = useState('');

    const getProducts = () => {
        // return await axios.get('/api/products')
        console.log('this is props', props)
        const products = fetch(`http://localhost:3000/api/products/${props.page}`, {
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
        const result = [];
        const products = getProducts()
        
        .then(data => {
            for (let i = 0; i < data.length; i++){
                result.push(<ProductCard
                    className="product-card"
                    key={i}
                    product={data[i].product_name}
                    image={(data[i].image_url)}
                    price={data[i].price}
                    description={data[i].product_description}
                />);
            };
            // console.log('this is result', result); //array of react components
            setProductList(result);
        })
        
        setFetched(true);
        // return () => {
        //     setProductList('');
        // }
    }, [props.page]);

    return(
        <div class="card-container">
            {fetched ? <>{productList}</> : ''}
        </div>

    );
};

export default Shop;