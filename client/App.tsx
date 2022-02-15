import React, { Component } from "react";
import ProductCard from './components/ProductCard';

const App = () => {

  return (
    <div>
      <div>This is Huy</div>
      <ProductCard 
        props={{ 
          product: 'Will Sentance',
          image: 'Will Sentance image',
          description: 'description string',
          price: 10
        }}
      />
    </div>
  );
};

export default App;