import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../components/utils"; // adjust path if needed

function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const tokenObj = localStorage.getItem("token");
        const token = tokenObj ? JSON.parse(tokenObj).token : null;

        const res = await fetch(`${API_URL}/api/products/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || "Failed to fetch product");
        }

        const data = await res.json();
        setProduct(data);
        setName(data.name);
        setPrice(data.price);
        setDescription(data.description);
        setCountInStock(data.countInStock);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      name,
      price,
      description,
      countInStock,
    };

    try {
      const userObj = localStorage.getItem("user");
      const user = userObj ? JSON.parse(userObj) : null;
      const token = user?.token || null;

      const res = await fetch(`${API_URL}/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to update product");
      }

      alert("Product updated successfully!");
      navigate(`/products/${id}`);
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <div>Loading product details...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Count In Stock:
          <input
            type="number"
            value={countInStock}
            onChange={(e) => setCountInStock(Number(e.target.value))}
            required
          />
        </label>
        <br />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Update Product
        </button>
      </form>
    </div>
  );
}

export default EditProductPage;
