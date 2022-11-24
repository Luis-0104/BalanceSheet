import { Instance, onSnapshot, types } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { PersonList } from "./personStore";

const RootModel = types.model({
  personList: PersonList,
});

// initialState, no balance required, it defaults to 0
let initialState = RootModel.create({
  personList: {
    persons: [
      {
        id: 0,
        name: "fooBar",
        email: "foobar@example.com",
      },
    ],
  },
});

// TODO: insert data via JSON, or cookies
const rootStoreInstance = initialState;

onSnapshot(rootStoreInstance, (snapshot) => {
  console.log("Snapshot: ", snapshot);
  localStorage.setItem("rootState", JSON.stringify(snapshot));
});

export interface IRootInstance extends Instance<typeof RootModel> {}

type RootContext = {
  store: IRootInstance;
};
const RootContext = createContext({ store: rootStoreInstance });

export const useRootStore = () => {
  return useContext(RootContext);
};

export const Provider = RootContext.Provider;
