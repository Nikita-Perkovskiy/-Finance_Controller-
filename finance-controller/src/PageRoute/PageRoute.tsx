import React from "react";
import { MainPage } from "../pages/MainPage/MainPage.tsx";
import { StatisticPage } from "../pages/StatisticPage/StatisticPage.tsx";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";

export const PageRoute = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainPage />} />
        <Route path="/statistics" element={<StatisticPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};
