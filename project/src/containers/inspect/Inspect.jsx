import React from "react";
import "./inspect.css";

import Pictures from "../../components/pictures/Pictures";

const Inspect = () => {
  return (
    <div className="Inspect">
      <div className="Inspect-pictures">
        <Pictures inspect={true} />
      </div>
    </div>
  );
};

export default Inspect;
