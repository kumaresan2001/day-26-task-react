import React from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../App";
import { useFormik } from "formik";


export default function Form({ id, products }) {
  console.log("Requested Data", products);
  const navigate = useNavigate();

  // let initialValues = {
  //     image: products.image,
  //     product: products.product,
  //     price: products.price,
  // };
  const validate = (values) => {
    const errors = {};

    if (!values.image) {
      errors.image = "Image Url Required";
    }
    if (!values.product) {
      errors.product = "Product Name Required";
    }
    if (!values.price) {
      errors.price = "Product Price Required";
    }
    return errors;
  };

  const { handleSubmit, handleChange, values, handleBlur, errors } = useFormik({
    initialValues: products,
    validate,
    onSubmit: async (values) => {
      console.log(values);
      await fetch(url + "/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then((value) => value.json())
        .then((res) => {
          alert("Product was successfully updated");
          navigate("/dashboard");
        })
        .catch((err) => alert(err));
    },
  });

  return (
    <>
      <div className="container m-3 ps-5 d-flex justify-content-center">
        <form id="form" onSubmit={handleSubmit} className="m-5 p-5 w-50">
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              className="form-control"
              name="image"
              value={values.image}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="text-danger mb-3">
            {errors.image ? errors.image : ""}
          </div>
          <div className="mb-3">
            <label htmlFor="product" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              name="product"
              value={values.product}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="text-danger mb-3">
            {errors.product ? errors.product : ""}
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              name="price"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="text-danger mb-3">
            {errors.price ? errors.price : ""}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
