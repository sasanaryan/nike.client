import { useEffect, useRef } from "react";
import { Location } from "react-router-dom";

interface LocationState {
  path: string;
}
const usePrevLocation = (location: Location) => {
  const prevLocRef = useRef(location);

  useEffect(() => {
    prevLocRef.current = location;
  }, [location]);

  return prevLocRef.current;
};

export default usePrevLocation;
