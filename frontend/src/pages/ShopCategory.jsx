import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/item/Item";

const ShopCategory = (props) => {
  const context = useContext(ShopContext);
  const { all_product } = context || {};

  console.log(context);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 of 36 products</span>
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product && all_product.length > 0 ? (
          all_product.map((item, index) => {
            if (item.category === props.category) {
              return (
                <Item
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;
