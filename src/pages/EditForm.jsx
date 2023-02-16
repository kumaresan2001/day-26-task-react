import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "../App";
import Form from "../components/Form";

export default function EditForm() {
  const [product, setProduct] = useState("");
  const { id } = useParams();

  const getProduct = () => {
    fetch(url + "/" + id, { method: "GET" })
      .then((data) => data.json())
      .then((item) => setProduct(item));
  };

  useEffect(
    getProduct,
    // eslint-disable-next-line
    [id]
  );

  return (
    <>
      <h2 className="mt-3 text-center">
        {id ? `Edit Product - ID: ${id}` : "Add Product"}
      </h2>
      {product ? <Form id={id} products={product} /> : "Loading..."}
    </>
  );
}
