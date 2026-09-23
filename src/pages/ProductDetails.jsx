import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";

const ProductDetails = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  async function fetchProductsById() {
    try {
      const response = await fetch(
        `https://mern-20251103-api.vercel.app/api/products/${params.id}`,
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProductsById();
  }, []);

  if (loading) return <Loading />;

  return (
    <section>
      <div className="container">
        <div style={{ display: "block" }}>
          <img
            src={product?.imageUrls[0]}
            alt={product?.name}
            height="400px"
            width={"auto"}
            style={{
              //   padding: "0.7rem",
              boxShadow: "3px 5px 10px gray",
              borderRadius: "10px",
            }}
          />
        </div>
        <div style={{ display: "inline-block" }}>
          <h1 style={{ borderBottom: "1px solid var(--primary-color)" }}>
            {product?.name}
          </h1>
        </div>
        <h3>{product?.brand}</h3>
        <h3>Rs. {product?.price}</h3>
        <p>{product?.description}</p>
      </div>
    </section>
  );
};

export default ProductDetails;
