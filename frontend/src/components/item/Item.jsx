import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  // Ensure the image URL is correctly displayed
  const imageUrl = props.image;

  return (
    <div className="item-container">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={imageUrl}
          alt={props.name}
          onError={(e) => {
            console.error("Failed to load image:", imageUrl);
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/150?text=Image+Not+Found";
          }}
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-price-container">
        <div className="item-price-current">{props.new_price}</div>
        <div className="item-price-previous">{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
