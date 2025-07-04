import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../components/utils";

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(`${API_URL}/api/products`);
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
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "150px", height: "auto" }}
                  />
                )}
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
