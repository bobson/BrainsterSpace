import React from "react";
import { Link } from "react-router-dom";

import "./errorpage.css";

const ErrorPage = () => {
  return (
    <div className="row  error">
      <p className="block-title">
        <Link to="/">
          <span>Go Back</span>
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
