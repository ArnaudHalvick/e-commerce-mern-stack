import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import Breadcrumb from "../components/breadcrumbs/breadcrumb";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrumb product={product} />
    </div>
  );
};

export default Product;
