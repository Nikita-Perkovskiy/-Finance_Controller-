import React from "react";
import { Link } from "react-router-dom";
import { AddMoneysForm } from "../../components/AddMoneysForm/AddMoneysForm.tsx";

export const StatisticPage = () => {
  return (
    <div>
      <div>StatisticPage</div>
      <Link to="/">MainPage</Link>
      <AddMoneysForm />
    </div>
  );
};
