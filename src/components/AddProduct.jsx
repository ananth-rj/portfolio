import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "./utils";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const userAuthData = localStorage.getItem("user");
  const token = JSON.parse(userAuthData).token;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("countInStock", countInStock);
      if (image) {
        formData.append("image", image);
      }

      const { data } = await axios.post(`${API_URL}/api/products`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          // If using JWT auth:
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Product created:", data);
      setMessage("Product created successfully!");

      // Optionally reset form
      setName("");
      setPrice("");
      setDescription("");
      setCountInStock("");
      setImage(null);
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message || "Something went wrong. Try again."
      );
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h2>Add New Product</h2>
      {message && (
        <div className="alert alert-info" role="alert">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Count In Stock</label>
          <input
            type="number"
            className="form-control"
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Product Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
