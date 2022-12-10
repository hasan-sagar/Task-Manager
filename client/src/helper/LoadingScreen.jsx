import { React, useState } from "react";
import ClockLoader  from "react-spinners/ClockLoader";
import { useSelector } from "react-redux";

function LoadingScreen() {
  let [color, setColor] = useState("#36d7b7");

  const loader = useSelector((state) => state.settings.loader);

  return (
    <div className={loader + " load"}>
      <ClockLoader 
        color={color}
        loading={true}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoadingScreen;
