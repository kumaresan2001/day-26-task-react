import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../App";


export default function Dashboard() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch(url)
      .then((data) => data.json())
      .then((items) => setProducts(items))
      .catch((error) => alert(error));
    // console.log(products);
  };

  useEffect(
    () => getProducts(),
    // eslint-disable-next-line
    []
  );

  const handleDelete = async (id) => {
    await fetch(url + "/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then(() => {
        getProducts();
        alert("Product deleted");
      });
  };

  const navigate = useNavigate();
  return (
    <div className="mt-3">
      <div className="container">
        <div className="row justify-content-md-center offset-5">
          <div className="col-12 offset-6">
            <button
              className="btn btn-outline-primary offset-6"
              variant="outline-primary"
              onClick={() => navigate("/add")}
            >
              Add new product
            </button>
          </div>
        </div>
      </div>
      {products.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="container justify-content-center">
          <div className="row">
            <div className="text-muted text-center m-4">List of Products</div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "5%" }}>
                    #
                  </th>
                  <th scope="col" style={{ width: "15%" }}>
                    Image
                  </th>
                  <th scope="col" style={{ width: "40%" }}>
                    Product
                  </th>
                  <th scope="col" style={{ width: "10%" }}>
                    Price
                  </th>
                  <th scope="col" style={{ width: "10%" }}></th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th className="align-middle" scope="row">
                        {index + 1}
                      </th>
                      <td className="align-middle">
                        <img src={item.image} className="w-50" alt="" />
                      </td>
                      <td className="align-middle">{item.product}</td>
                      <td className="align-middle">{item.price}</td>
                      <td className="align-middle">
                        <button
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => {
                            navigate("/edit/" + item.id);
                          }}
                        >
                          Edit
                        </button>
                        &nbsp;
                        <button
                          className="btn btn-outline-primary mr-3 btn-sm"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
