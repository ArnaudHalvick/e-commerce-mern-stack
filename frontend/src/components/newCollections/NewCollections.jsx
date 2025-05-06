import "./NewCollections.css";
import Item from "../item/Item";
import { useState, useEffect } from "react";

const NewCollection = () => {
  const [newCollection, setNewCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:4000/newcollection")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("New collection fetched:", data.length);
        setNewCollection(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching new collection:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="new-collections">
        <h2>Loading new collection...</h2>
      </div>
    );
  if (error)
    return (
      <div className="new-collections">
        <h2>Error: {error}</h2>
      </div>
    );

  return (
    <div className="new-collections">
      <h1>New Collection</h1>
      <hr />
      <div className="collections">
        {newCollection.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={`$${item.new_price}`}
            old_price={`$${item.old_price}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
