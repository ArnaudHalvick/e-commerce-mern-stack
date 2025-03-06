import "./Item.css";

const Item = (props) => {
  return (
    <div className="item-container">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-price-container">
        <div className="item-price-current">${props.new_price}</div>
        <div className="item-price-previous">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
