import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import StartScreenView from "../views/StartScreenView/StartScreenView";
import AddUnitsView from "../views/AddUnitsView/AddUnitsView";
import AddUnitsZeroStateView from "../views/AddUnitsZeroStateView/AddUnitsZeroStateView";
import ChooseFactionView from "../views/ChooseFactionView/ChooseFactionView";
import ChooseRuleSetView from "../views/ChooseRuleSetView/ChooseRuleSetView";

const ROUTES: { [path: string]: Partial<RouteObject> } = {
  START_SCREEN: {
    element: <StartScreenView />,
  },
  ADD_UNITS: {
    element: <AddUnitsView />,
  },
  ADD_UNITS_ZERO_STATE: {
    element: <AddUnitsZeroStateView />,
  },
  CHOOSE_FACTION: {
    element: <ChooseFactionView />,
  },
  CHOOSE_RULESET: {
    element: <ChooseRuleSetView />,
  },
};

const buildRoutes = (): RouteObject[] =>
  Object.entries(ROUTES).map(([path, routeObj]) => ({
    path,
    ...routeObj,
  }));

const router = createBrowserRouter(buildRoutes());
export default router;
