import { useParams, useSearchParams } from "react-router-dom";

export const DogDetail = () => {
  const ourParams = useParams();
  const [query] = useSearchParams();
  const ourQueries = query.get("isAnyoneReadingThis");
  const testQuery = query.get("thisIsASecondTest");
  console.log("here is our params", ourParams);
  console.log("here is the query", ourQueries, testQuery);
  return <div>{ourParams.dogName}'s Dog Page</div>;
};
