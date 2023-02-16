import React from "react";

export default function Product({ product }) {
  return (
    <div className="col-md-3 mt-4">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img
              src={product.image}
              className="card-img img-fluid"
              alt={product.product}
            />
          </div>
        </div>
        <div className="card-body bg-light text-center g-5">
          <h5 className="font-weight-semibold my-2">{product.product}</h5>
          <h3 className="my-2 font-weight-semibold">{product.price}</h3>
          <button type="button" className="btn bg-primary text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
