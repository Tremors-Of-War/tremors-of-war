import React, { FunctionComponent, useState } from "react";
import { RuleSet } from "../../types";
import AddUnitsView from "../AddUnitsView/AddUnitsView";
import AddUnitsZeroStateView from "../AddUnitsZeroStateView/AddUnitsZeroStateView";
import ChooseFactionView from "../ChooseFactionView/ChooseFactionView";
import ChooseRuleSetView from "../ChooseRuleSetView/ChooseRuleSetView";
import StartScreenView from "../StartScreenView/StartScreenView";
import ROUTES, { INITIAL_ROUTE } from "./routes";

interface State {
  ruleSet: RuleSet | null;
}

const initialState: State = {
  ruleSet: null,
};

const AppView: FunctionComponent = () => {
  const [currentRoute, setCurrentRoute] = useState(INITIAL_ROUTE);
  const [state, setState] = useState<State>(initialState);

  // TODO: VALIDATE ROUTES
  switch (currentRoute) {
    case ROUTES.START_SCREEN:
      return (
        <StartScreenView
          onClickNewList={() => setCurrentRoute(ROUTES.CHOOSE_RULESET)}
        />
      );
    case ROUTES.CHOOSE_RULESET:
      return (
        <ChooseRuleSetView
          onClickBack={() => setCurrentRoute(ROUTES.START_SCREEN)}
          setRuleSet={(ruleSet) => {
            setState({ ...state, ruleSet });
            setCurrentRoute(ROUTES.CHOOSE_FACTION);
          }}
        />
      );
    case ROUTES.CHOOSE_FACTION:
      return (
        <ChooseFactionView
          ruleSet={state.ruleSet!}
          onClickBack={() => setCurrentRoute(ROUTES.CHOOSE_RULESET)}
        />
      );
    case ROUTES.ADD_UNITS:
      return <AddUnitsView faction="DarkAges" num={1} />; // TODO: THESE VALUES
    case ROUTES.ADD_UNITS_ZERO_STATE:
      return <AddUnitsZeroStateView faction="DarkAges" />; // TODO: THESE VALUES
    default:
      console.error(`Unknown route: ${currentRoute}`);
      return <p>Unknown route</p>;
  }
};

export default AppView;
