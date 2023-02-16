import React, { useState, useEffect } from "react";
import { url } from "../App";
import Product from "../components/Product";

export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch(url)
      .then((data) => data.json())
      .then((items) => setProducts(items));
    console.log(products);
  };

  useEffect(
    () => getProducts(),
    // eslint-disable-next-line
    []
  );

  return (
    <>
      {products.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="container d-flex justify-content-center">
            <div className="row">
              <h2 className="text-center mt-3">List of products</h2>
            </div>
          </div>
          <div className="container ">
            <div className="row">
              {products.map(function (item) {
                return <Product key={item.id} product={item} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
