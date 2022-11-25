import { types } from "mobx-state-tree";

export const Searchterm = types
  .model({
    val: types.optional(types.string, ""),
    isAdmin: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    updateVal(newVal: string) {
      //TODO: Checking for pw, now its just an easteregg
      if (newVal === "asdf") {
        self.isAdmin = true;
        console.log("Hello There, fellow Admin!")
      }
      self.val = newVal;
    },
    exitAdmin() {
      self.isAdmin = false;
    },
  }));
