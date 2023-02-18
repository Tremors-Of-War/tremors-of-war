import React from "react";
import {createBrowserRouter, createMemoryRouter, RouteObject} from "react-router-dom";
import StartScreenView from "../views/StartScreenView/StartScreenView";
import AddUnitsView from "../views/AddUnitsView/AddUnitsView";
import AddUnitsZeroStateView from "../views/AddUnitsZeroStateView/AddUnitsZeroStateView";
import ChooseFactionView from "../views/ChooseFactionView/ChooseFactionView";
import ChooseRuleSetView from "../views/ChooseRuleSetView/ChooseRuleSetView";
import ROUTES from "./routes";

const routes = [
   {
    element: <StartScreenView />,
    path: ROUTES.START_SCREEN
  },
   {
    element: <AddUnitsView />,
    path: ROUTES.ADD_UNITS
  },
   {
    element: <AddUnitsZeroStateView />,
    path: ROUTES.ADD_UNITS_ZERO_STATE
  },
   {
    element: <ChooseFactionView />,
    path: ROUTES.CHOOSE_FACTION
  },
   {
    element: <ChooseRuleSetView />,
    path: ROUTES.CHOOSE_RULESET
  },
];

const router = createBrowserRouter(Object.values(routes));
export default router;
