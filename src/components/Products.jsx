import React from 'react';
import { useEffect, useState } from 'react';
import store from '../util';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./products.css";


export default function Products () {
    const  [products, setProducts] = useState([]);
        console.log(products);
    const getProducts = async () => { 
        try{
         const res = await store();
         //console.log(res);
         const items = await res.json();
         setProducts(items);
                }
                catch(e){
                    console.error(e);
                }
    }
    useEffect(() => {
  getProducts()
},[]
   )
        return (
        <>
         <section className="container">
            <div className='row'>
                {products.map((product) => {
                return (
                <div className='card col-12 col-md-6 col-lg-3 p-5 flex' key={product.id}>
                    <a href={product.id}><img src={product.image} alt={product.title} className='pictures pb-3 no-border' /></a>
                    <a href={products/product.id}><h5 className='card-title heading-link'>{product.title}</h5></a>
                    {/* <p className='text-start'>{product.description}</p> */}
                    
                    <div className='row'>
                    <button type='button' className='col-6 mt-auto p-2 btn btn-outline-success'>Buy Now</button>
                    <h5 className='mt-auto col-6 text-start price'><strong>${product.price.toFixed(2)}</strong></h5> 
                    </div>
                </div>)})}
                
            </div>
            </section>   
            </>
    )
}