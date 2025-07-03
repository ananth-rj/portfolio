import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductDetailPage from "./ProductDetailPage";

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    getProducts();
  }, []);
  return (
    <div>
      <h3>Products Page</h3>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <Link to={product._id}>
              <div>
                <img
                  src={`http://localhost:5000${product.image}`}
                  alt={product.name}
                />
              </div>
              <div>
                <p>{product.name}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPage;
