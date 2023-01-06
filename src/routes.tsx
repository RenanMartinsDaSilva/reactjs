import React from "react";
import { Routes, Route, Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./Views/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
