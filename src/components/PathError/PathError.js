import React from "react";
import { Link } from "react-router-dom";

const PathError = () => {
  return (
    <div className="row m-5 align-items-center">
      <p className="block-title">
        Page Not Found. Go Back to{" "}
        <Link to="/">
          <span>HomePage</span>
        </Link>
      </p>
    </div>
  );
};

export default PathError;
