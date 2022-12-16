import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import store from '../store';
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
         <main className="container">
            <div className='row'>
            {console.log(`line 31- ${products[0]}`)}
                {products.map((product) => {
                return (
                <section className='card col-12 col-md-6 col-lg-3 p-5 flex' key={product.id}>
                    <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.title} className='pictures pb-3 no-border' />
                        <h5 className='card-title heading-link'>{product.title}</h5>
                    </Link>
                    {/* <p className='text-start'>{product.description}</p> */}
                    <div className='row'>
                    <button type='button' className='col-6 mt-auto p-2 btn btn-outline-success'>Buy Now</button>
                    <h5 className='mt-auto col-6 text-start price'><strong>${product.price.toFixed(2)}</strong></h5> 
                    </div>
                </section>)})}
                
            </div>
            </main>   
    )
}