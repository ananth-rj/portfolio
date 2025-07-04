import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../components/utils";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
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
  const handleViewDetails = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div>
      <h3>Products Page</h3>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <div>
              <p>{product.name}</p>
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "150px", height: "auto" }}
                />
              )}
            </div>
            <button
              className="addtocart"
              onClick={() => handleViewDetails(product._id)}
            >
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPage;
