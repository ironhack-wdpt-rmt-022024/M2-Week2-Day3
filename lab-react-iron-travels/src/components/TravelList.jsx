import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import { TripCard } from "./TripCard";

export const TravelList = () => {
  const [trips, setTrips] = useState(travelPlansData);
  const handleDeleteTrip = (id) => {
    console.log("trip deleted", id);
    const filteredTrips = trips.filter((oneTrip) => oneTrip.id !== id);
    setTrips(filteredTrips);
    console.log("filtered trips", filteredTrips);
  };
  return (
    <div>
      {trips.map((oneTrip) => {
        return (
          <TripCard
            key={oneTrip.id}
            oneTrip={oneTrip}
            handleDeleteTrip={handleDeleteTrip}
          />
        );
      })}
    </div>
  );
};
