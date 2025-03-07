import "./Popular.css";
import data_product from "../assets/data";
import Item from "../item/Item";

const Popular = () => {
  return (
    <div className="popular-container">
      <h1>Popular For Women</h1>
      <hr />
      <div className="popular-items">
        {data_product.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            new_price={`$${item.new_price}`}
            old_price={`$${item.old_price}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
