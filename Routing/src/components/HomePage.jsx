import { useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [dogs, setDogs] = useState(["Ragnar", "Meli", "Murphy"]);
  return (
    <div>
      <h1>Homepage</h1>
      {dogs.map((oneDog) => {
        return (
          <div key={oneDog}>
            <Link
              to={`/dogs/${oneDog}?isAnyoneReadingThis=probablyNot&thisIsASecondTest=IHateQueries`}
            >
              <h4> {oneDog}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
