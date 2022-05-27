import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateRestaurant = (props) => {
  const { id } = useParams();
  let history = useHistory();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);

      setName(response.data.data.restaurant.name);
      setLocation(response.data.data.restaurant.location);
      setPriceRange(response.data.data.restaurant.price_range);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });

    history.push("/");
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label for="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            className="form-control"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label for="price_range">Price Range</label>
          <input
            type="number"
            id="price_range"
            value={priceRange}
            className="form-control"
            onChange={(e) => setPriceRange(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
