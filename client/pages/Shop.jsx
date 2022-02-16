// import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import '../../styles/page.css';
import ProductCard from '../components/ProductCard';

const Shop = (props) => {

    const [fetched, setFetched] = useState(false);
    const[productList, setProductList] = useState('');

    const getProducts = async () => {
        // return await axios.get('/api/products')

        const products = await fetch(`http://localhost:3000/api/products/${props.page}`, {
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
            // console.log('this is data', data); //array of objects
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
            console.log('this is result', result); //array of react components
            setProductList(result);
        })
        
        
    //     console.log('this is data', products);
        
        setFetched(true);
    }, []);

    return(
        <div class="card-container">
            all page
            {fetched ? <>{productList}</> : ''}
        </div>
    );
};

export default Shop;