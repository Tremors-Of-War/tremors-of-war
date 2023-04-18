import React, { FunctionComponent, useEffect, useState } from "react";
import { Faction, RuleSet, Model } from "../../types";
import AddUnitsView from "../AddUnitsView/AddUnitsView/AddUnitsView";
import AddUnitsZeroStateView from "../AddUnitsView/AddUnitsZeroState/AddUnitsZeroStateView";
import ChooseFactionView from "../ChooseFactionView/ChooseFactionView";
import ChooseRuleSetView from "../ChooseRuleSetView/ChooseRuleSetView";
import SetUnitView from "../SetUnitView/SetUnitView";
import StartScreenView from "../StartScreenView/StartScreenView";
import ROUTES from "./routes";
import PlayScreenView from "../PlayScreenView/PlayScreenView";

interface State {
  ruleSet: RuleSet | null;
  faction: Faction | null;
  warbandTotal: number;
  models: Record<string, Model>;
  currentRoute: string;
}

const initialState: State = {
  ruleSet: null,
  faction: null,
  currentRoute: ROUTES.START_SCREEN,
  warbandTotal: 1000,
  models: {}
};

const AppView: FunctionComponent = () => {
  const [state, setState] = useState<State>(initialState);
  const [editModel, setEditModel] = useState<string>("");

  useEffect(() => {
    if (state === initialState) return;
    localStorage.setItem("dataKey", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const savedState = localStorage.getItem("dataKey");
    if (savedState) {
      const value = JSON.parse(savedState);

      setState(value);
    }
  }, []);

  switch (state.currentRoute) {
    case ROUTES.START_SCREEN:
      return (
        <StartScreenView
          onClickNewList={() =>
            setState({ ...state, currentRoute: ROUTES.CHOOSE_RULESET })
          }
        />
      );
    case ROUTES.CHOOSE_RULESET:
      return (
        <ChooseRuleSetView
          onClickBack={() =>
            setState({ ...state, currentRoute: ROUTES.START_SCREEN })
          }
          setRuleSet={(ruleSet) => {
            setState({
              ...state,
              ruleSet,
              currentRoute: ROUTES.CHOOSE_FACTION
            });
          }}
        />
      );
    case ROUTES.CHOOSE_FACTION:
      return (
        <ChooseFactionView
          ruleSet={state.ruleSet!}
          onClickBack={() =>
            setState({ ...state, currentRoute: ROUTES.CHOOSE_RULESET })
          }
          setFaction={(faction) => {
            setState({
              ...state,
              faction,
              currentRoute: ROUTES.ADD_UNITS
            });
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
              onClickAdd={() => {
                setEditModel("");
                setState({ ...state, currentRoute: ROUTES.SET_UNIT });
              }}
              onClickRestart={() => {
                setState({
                  ...initialState,
                  currentRoute: ROUTES.START_SCREEN
                });
              }}
              onClickPlay={() =>
                setState({ ...state, currentRoute: ROUTES.PLAY_SCREEN })
              }
              models={state.models}
              onEdit={(modelId: string) => {
                setEditModel(modelId);
                setState({ ...state, currentRoute: ROUTES.SET_UNIT });
              }}
              onDelete={(modelId: string) => {
                const { [modelId]: remove, ...deleteModel } = state.models;

                setState({ ...state, models: deleteModel });
              }}
              setWarbandTotal={(warbandTotal: number) =>
                setState({ ...state, warbandTotal })
              }
            />
          )}
          {state.models && Object.keys(state.models).length === 0 && (
            <AddUnitsZeroStateView
              faction={state.faction!}
              models={state.models}
              warbandTotal={state.warbandTotal}
              onClickBack={() =>
                setState({ ...state, currentRoute: ROUTES.CHOOSE_FACTION })
              }
              onClickAdd={() => {
                setEditModel("");
                setState({ ...state, currentRoute: ROUTES.SET_UNIT });
              }}
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
          models={Object.values(state.models)}
          warbandTotal={state.warbandTotal}
          existingModel={state.models[editModel]}
          onDelete={(modelId: string) => {
            const { [modelId]: remove, ...deleteModel } = state.models;
            setState({
              ...state,
              models: deleteModel,
              currentRoute: ROUTES.ADD_UNITS
            });
          }}
          onClickBack={() => {
            setState({ ...state, currentRoute: ROUTES.ADD_UNITS });
          }}
          onClickSave={(model) => {
            setState({
              ...state,
              currentRoute: ROUTES.ADD_UNITS,
              models: { ...state.models, [model.id]: model }
            });
          }}
        />
      );

    case ROUTES.PLAY_SCREEN:
      return (
        <PlayScreenView
          onClickBack={() =>
            setState({ ...state, currentRoute: ROUTES.ADD_UNITS })
          }
          onClickRules={() =>
            alert("YOU RULE! (rules display is in development :) )")
          }
          models={Object.values(state.models)}
          faction={state.faction}
          onActiveChange={(model) =>
            setState({
              ...state,
              models: {
                ...state.models,
                [model.id]: { ...model, active: !model.active }
              }
            })
          }
        />
      );
    default:
      // eslint-disable-next-line no-console
      console.error(`Unknown route: ${state.currentRoute}`);
      return <p>Unknown route</p>;
  }
};

export default AppView;
