import { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import Loading from "../components/Loading";

const ProductsPage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  async function fetchAllProducts() {
    try {
      const response = await fetch(
        "https://mern-20251103-api.vercel.app/api/products",
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchAllProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section id="products">
      <div className="container">
        <h1>All Products</h1>
        <div className="products">
          {products.map((item) => (
            <ProductCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
