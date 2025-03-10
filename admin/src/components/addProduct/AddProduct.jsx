import "./AddProduct.css";
import upload_area from "../../assets/admin_assets/upload_area.svg";

const AddProduct = () => {
  return (
    <div className="product-form">
      <div className="product-form__field">
        <p>Product Name</p>
        <input type="text" name="name" placeholder="Enter Product Name" />
      </div>
      <div className="product-form__price-container">
        <div className="product-form__field">
          <p>Product Price</p>
          <input
            type="text"
            name="old_price"
            placeholder="Enter Product Price"
          />
        </div>
        <div className="product-form__field">
          <p>Offer Price</p>
          <input type="text" name="new_price" placeholder="Enter Offer Price" />
        </div>
      </div>
      <div className="product-form__field">
        <p>Product Category</p>
        <select className="product-form__category-select">
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kids</option>
          {/* TODO: Check if we can change value to kids instead of kid */}
        </select>
      </div>
      <div className="product-form__field">
        <label htmlFor="file-input" className="product-form__upload-label">
          <img
            src={upload_area}
            alt="upload-area"
            className="product-form__upload-image"
          />
        </label>
        <input type="file" id="file-input" name="image" hidden />
      </div>
      <button className="product-form__submit-button">Add Product</button>
    </div>
  );
};

export default AddProduct;
