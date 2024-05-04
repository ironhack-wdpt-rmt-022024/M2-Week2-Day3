export const TripCard = ({ oneTrip, handleDeleteTrip }) => {
  return (
    <div className="trip-card">
      <img
        src={oneTrip.image}
        alt={oneTrip.destination}
        style={{ height: "100px" }}
      />
      <div className="trip-card-inner-container">
        <h6>
          {oneTrip.destination} ({oneTrip.days}days )
        </h6>
        <h6>{oneTrip.description}</h6>
        <h6>Price: {oneTrip.totalCost}</h6>
        {oneTrip.totalCost <= 350 ? (
          <h6 className="great-deal">Great Deal </h6>
        ) : null}
        {oneTrip.totalCost >= 1500 && oneTrip.allInclusive ? (
          <div style={{ display: "flex" }}>
            <h6 className="premium">Premium</h6>
            <h6 className="premium">All Inclusive</h6>
          </div>
        ) : oneTrip.totalCost >= 1500 ? (
          <h6 className="premium">Premium</h6>
        ) : null}

        {/* delete button calls the function from the parent that we passed as props, named handleDeleteTrip*/}
        <button
          onClick={() => {
            handleDeleteTrip(oneTrip.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
