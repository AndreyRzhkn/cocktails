/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { CocktailsName } from "@shared/constants";

const CocktailPage = lazy(() => import("@pages/CocktailPage"));

export const routes = [
  ["/", <Navigate to={`${CocktailsName.MARGARITA}`} replace />],
  ["/:cocktailId", <CocktailPage />],
].map(([path, element]) => ({ path, element } as RouteObject));
