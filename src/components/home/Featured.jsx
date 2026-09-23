import { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";

const Featured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://mern-20251103-api.vercel.app/api/products?limit=4&offset=12")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  return (
    <section id="featured">
      <div className="container">
        <h2>Featured Products</h2>
        <div className="products">
          {products.map((item) => (
            <ProductCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
