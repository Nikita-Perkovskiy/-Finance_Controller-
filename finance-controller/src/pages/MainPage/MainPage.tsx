import React from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div>
      <div>MainPage</div>
      <Link to="/statistics">statistics</Link>
    </div>
  );
};
