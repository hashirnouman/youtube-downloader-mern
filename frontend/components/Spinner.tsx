import React, { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
type Props = {};

const Spinner = (props: Props) => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <div>
      <ClipLoader
        color="red"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        cssOverride={override}
      />
    </div>
  );
};

export default Spinner;
