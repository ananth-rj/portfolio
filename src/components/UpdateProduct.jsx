import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../components/utils";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  // ✅ Fetch existing product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/products/${id}`);
        setName(data.name);
        setPrice(data.price);
        setDescription(data.description);
        setCountInStock(data.countInStock);
        // We don't set image file here - just display existing image
      } catch (error) {
        console.error(error);
        setMessage(
          error.response?.data?.message || "Failed to load product details"
        );
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", Number(price));
      formData.append("description", description);
      formData.append("countInStock", Number(countInStock));
      if (image) {
        formData.append("image", image);
      }

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      const { data } = await axios.put(
        `${API_URL}/api/products/${id}`,
        formData,
        config
      );

      console.log("Product updated:", data);
      setMessage("Product updated successfully!");
      setTimeout(() => {
        navigate("/products");
      }, 1500);
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message || "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h2>Update Product</h2>
      {message && (
        <div className="alert alert-info" role="alert">
          {message}
        </div>
      )}
      {loading && <div>Loading...</div>}

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
          <label className="form-label">Current Product Image</label>
          <br />
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              style={{ width: "200px", height: "auto" }}
            />
          ) : (
            <img
              src={`${API_URL}/api/products/${id}/image`}
              alt="current product"
              style={{ width: "200px", height: "auto" }}
            />
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Upload New Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
