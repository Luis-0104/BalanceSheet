import { Instance, onSnapshot, types } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { loadData, saveData } from "../data/dataHandler";
import { PersonList } from "./personList";
import { Searchterm } from "./searchTerm";

const RootModel = types.model({
  personList: PersonList,
  searchTerm: Searchterm,
});

let initialState = RootModel.create(loadData());

const rootStoreInstance = initialState;

onSnapshot(rootStoreInstance, (snapshot) => {
  console.log("Snapshot: ", snapshot);
  saveData(snapshot);
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
