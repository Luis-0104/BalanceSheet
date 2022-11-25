import { remove } from "mobx";
import {
  destroy,
  getParent,
  Instance,
  SnapshotIn,
  types,
} from "mobx-state-tree";
import { balanceEmptyError } from "../errors/balanceEmptyError";
import { Person } from "./person";



export const PersonList = types
  .model({
    persons: types.optional(types.array(Person), []),
  })
  .actions((self) => ({
    addPerson(newPerson: SnapshotIn<typeof Person> | Instance<typeof Person>) {
      self.persons.push(newPerson);
    },
    remove(person: SnapshotIn<typeof Person>) {
      destroy(person);
    },
    getPersonWithID(
      id: number
    ): undefined | SnapshotIn<typeof Person> | Instance<typeof Person> {
      for (let p of self.persons) {
        if (p.id == id) {
          return p;
        }
      }
      return undefined;
    },
  }))
  .views((self) => ({
    get poorestPerson() {
      let __poorest = self.persons[0];
      for (let p of self.persons) {
        if (p.balance < __poorest.balance) {
          __poorest = p;
        }
      }
      return __poorest;
    },
    get richestPerson() {
      let __richest = self.persons[0];
      for (let p of self.persons) {
        if (p.balance > __richest.balance) {
          __richest = p;
        }
      }
      return __richest;
    },
  }));
