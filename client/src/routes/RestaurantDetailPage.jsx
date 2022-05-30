import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";

import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-1">
            {selectedRestaurant.restaurant.name}
          </h1>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
            <AddReview />
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantDetailPage;
