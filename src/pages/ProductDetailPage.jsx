import { useEffect, useState } from "react";
import { Link, Links, useNavigate, useParams } from "react-router-dom";

function ProductDetailPage() {
  const { id } = useParams(); // get product ID from route
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!res.ok) {
          // If product not found (e.g. 404)
          navigate("/notfound");
          return;
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };
    getProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h3>{product.name}</h3>
      <img src={`http://localhost:5000${product.image}`} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Available Stock: {product.countInStock}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </div>
  );
}

export default ProductDetailPage;
