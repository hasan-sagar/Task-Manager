import { React, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useSelector } from "react-redux";

function LoadingScreen() {
  let [color, setColor] = useState("#36d7b7");

  const loader = useSelector((state) => state.settings.loader);

  return (
    <div className={loader + " load"}>
      <ClimbingBoxLoader
        color={color}
        loading={true}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoadingScreen;
