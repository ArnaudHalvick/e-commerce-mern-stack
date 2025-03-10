import "./AddProduct.css";

import upload_area from "../../assets/admin_assets/upload_area.svg";
import { useState } from "react";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    } else {
      alert("Please upload an image file");
    }
  };

  const addProduct = async () => {
    try {
      // Create a new FormData instance
      let formData = new FormData();

      // Append the image file with field name 'product'
      formData.append("product", image);

      // Append all product details
      formData.append("name", product.name);
      formData.append("category", product.category);
      formData.append("new_price", product.new_price);
      formData.append("old_price", product.old_price);

      // Send the data to your backend API
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        product.image = data.image_url;
        await fetch("http://localhost:4000/add-product", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });

        // Reset the form
        setProduct({
          name: "",
          image: "",
          category: "women",
          new_price: "",
          old_price: "",
        });
        setImage(null);
      }
      console.log(data);
      alert("Product Added Successfully");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Please try again.");
    }
  };

  return (
    <div className="product-form">
      <div className="product-form__field">
        <p>Product Name</p>
        <input
          type="text"
          name="name"
          placeholder="Enter Product Name"
          value={product.name}
          onChange={changeHandler}
        />
      </div>
      <div className="product-form__price-container">
        <div className="product-form__field">
          <p>Product Price</p>
          <input
            type="number"
            name="old_price"
            placeholder="Enter Product Price"
            value={product.old_price}
            onChange={changeHandler}
            min="0"
            step="0.01"
          />
        </div>
        <div className="product-form__field">
          <p>Offer Price</p>
          <input
            type="number"
            name="new_price"
            placeholder="Enter Offer Price"
            value={product.new_price}
            onChange={changeHandler}
            min="0"
            step="0.01"
          />
        </div>
      </div>
      <div className="product-form__field">
        <p>Product Category</p>
        <select
          className="product-form__category-select"
          value={product.category}
          onChange={changeHandler}
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kids</option>
          {/* TODO: Check if we can change value to kids instead of kid */}
        </select>
      </div>
      <div className="product-form__field">
        <label htmlFor="file-input" className="product-form__upload-label">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt={image ? "Product preview" : "Upload area"}
            className="product-form__upload-image"
          />
          <p>{image ? "Click to change image" : "Click to upload image"}</p>
        </label>
        <input
          type="file"
          id="file-input"
          name="image"
          hidden
          accept="image/*"
          onChange={imageHandler}
        />
      </div>
      <button
        onClick={() => addProduct()}
        className="product-form__submit-button"
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
