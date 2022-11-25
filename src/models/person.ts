import { remove } from "mobx";
import {
  destroy,
  getParent,
  Instance,
  SnapshotIn,
  types,
} from "mobx-state-tree";
import { balanceEmptyError } from "../errors/balanceEmptyError";
import { PersonList } from "./personList";

export const Person = types
  .model({
    id: types.number,
    name: types.string,
    email: types.string,
    balance: types.optional(types.number, 0),
  })
  .actions((self) => ({
    changeName(newName: string) {
      self.name = newName;
    },
    changeEmail(newEmail: string) {
      self.email = newEmail;
    },
    updateBalance(difference: number) {
      if (self.balance + difference < 0) {
        throw new balanceEmptyError(
          `${self.name} with id ${self.id} currently has a balance of ${
            self.balance
          }, so ${-difference} cannot be subtracted`
        );
      } else {
        self.balance += difference;
      }
    },
    remove() {
      getParent<typeof PersonList>(self,2).remove(self);
    },
  }));


