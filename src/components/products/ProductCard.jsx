import { Link } from "react-router";

const ProductCard = ({ _id: id, name, imageUrls: imageUrl, brand, price }) => {
  return (
    <div className="card">
      {/* possibility of having 1+ images, so the first image is chosen to represent this specific item*/}
      <img src={imageUrl[0]} alt={name} />
      <div className="content">
        <h4 className="product-name">{name}</h4>
        <p>
          Brand: <strong>{brand}</strong>
        </p>
        <h5>Rs. {price}</h5>
        <div className="actions">
          <Link className="button" to={`/products/${id}`}>
            View
          </Link>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
