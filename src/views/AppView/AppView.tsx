import React, { FunctionComponent, useState } from "react";
import { Faction, RuleSet, Model } from "../../types";
import AddUnitsView from "../AddUnitsView/AddUnitsView";
import AddUnitsZeroStateView from "../AddUnitsZeroStateView/AddUnitsZeroStateView";
import ChooseFactionView from "../ChooseFactionView/ChooseFactionView";
import ChooseRuleSetView from "../ChooseRuleSetView/ChooseRuleSetView";
import SetUnitView from "../SetUnitView/SetUnitView";
import StartScreenView from "../StartScreenView/StartScreenView";
import ROUTES, { INITIAL_ROUTE } from "./routes";

interface State {
  ruleSet: RuleSet | null;
  faction: Faction | null;
  warbandTotal: number;
  models: { [id: string]: Model };
}

const initialState: State = {
  ruleSet: null,
  faction: null,
  warbandTotal: 0,
  models: {}
};

const AppView: FunctionComponent = () => {
  const [currentRoute, setCurrentRoute] = useState(INITIAL_ROUTE);
  const [state, setState] = useState<State>(initialState);

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
          setFaction={(faction) => {
            setState({ ...state, faction });
            setCurrentRoute(ROUTES.ADD_UNITS);
          }}
        />
      );

    case ROUTES.ADD_UNITS:
      return (
        <>
          {state.models && Object.keys(state.models).length > 0 && (
            <AddUnitsView
              faction={state.faction!}
              warbandTotal={state.warbandTotal}
              onClickAdd={() => setCurrentRoute(ROUTES.SET_UNIT)}
              onClickBack={() => setCurrentRoute(ROUTES.CHOOSE_FACTION)}
              onClickPlay={() => alert("Navigate to play screen")}
              tempFunc={() => setState({ ...state, models: {} })}
              models={state.models}
              setWarbandTotal={(warbandTotal) =>
                setState({ ...state, warbandTotal })
              }
            />
          )}
          {state.models && Object.keys(state.models).length === 0 && (
            <AddUnitsZeroStateView
              faction={state.faction!}
              warbandTotal={state.warbandTotal}
              onClickBack={() => setCurrentRoute(ROUTES.CHOOSE_FACTION)}
              onClickAdd={() => setCurrentRoute(ROUTES.SET_UNIT)}
              setWarbandTotal={(warbandTotal) =>
                setState({ ...state, warbandTotal })
              }
            />
          )}
        </>
      );
    case ROUTES.SET_UNIT:
      return (
        <SetUnitView
          faction={state.faction!}
          warbandTotal={state.warbandTotal}
          onClickBack={() => {
            if (state.models && Object.keys(state.models).length > 0) {
              setCurrentRoute(ROUTES.ADD_UNITS);
            } else {
              setCurrentRoute(ROUTES.ADD_UNITS);
            }
          }}
          onClickSave={(model) => {
            setState({
              ...state,
              models: { ...state.models, [model.id]: model }
            });
            setCurrentRoute(ROUTES.ADD_UNITS);
          }}
        />
      );
    default:
      // eslint-disable-next-line no-console
      console.error(`Unknown route: ${currentRoute}`);
      return <p>Unknown route</p>;
  }
};

export default AppView;
