import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function ProductPage() {
  const { id } = useParams();
  console.log('useParams id', id);
  const [item, setItem] = useState({});

  async function getProduct() {
    try {
      let api = await fetch(`https://fakestoreapi.com/products/${id}`);
      const item = await api.json();
      
      setItem(item);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <main className="container">
      <div className="row">
        <section
          className="col-6   p-5 flex"
          key={item.id}
        >
          <img
            src={item.image}
            alt={item.title}
            className="pictures pb-3 no-border"
          />
          <h5 className="card-title heading-link">{item.title}</h5>
          <p className="text-start">{item.description}</p>
          <div className="row">
            <button
              type="button"
              className="col-6 mt-auto p-2 btn btn-outline-success"
            >
              Buy Now
            </button>
            <h5 className="mt-auto col-6 text-start price">
              <strong>${Number(item.price).toFixed(2)}</strong>
            </h5>
          </div>
        </section>
      </div>
      <Link to={"/"}>
        <button>Home Page</button>
      </Link>
    </main>
  );
}
