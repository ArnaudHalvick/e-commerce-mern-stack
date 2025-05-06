import "./Popular.css";
import Item from "../item/Item";
import { useState, useEffect } from "react";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:4000/featured-women")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Popular products fetched:", data.length);
        setPopular(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching popular products:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="popular-container">
        <h2>Loading popular products...</h2>
      </div>
    );
  if (error)
    return (
      <div className="popular-container">
        <h2>Error: {error}</h2>
      </div>
    );

  return (
    <div className="popular-container">
      <h1>Popular For Women</h1>
      <hr />
      <div className="popular-items">
        {popular.map((item) => (
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
