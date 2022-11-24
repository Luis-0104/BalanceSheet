import { destroy, Instance, SnapshotIn, types } from "mobx-state-tree";
import { balanceEmptyError } from "../errors/balanceEmptyError";

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
          `Error: ${self.name} with id ${self.id} currently has a balance of ${
            self.balance
          }, so ${-difference} cannot be subtracted`
        );
      } else {
        self.balance += difference;
      }
    },
  }));
export const PersonList = types
  .model({
    persons: types.optional(types.array(Person), []),
  })
  .actions((self) => ({
    addPerson(newPerson: SnapshotIn<typeof Person> | Instance<typeof Person>) {
      self.persons.push(newPerson);
    },
    removePerson(person: SnapshotIn<typeof Person> | Instance<typeof Person>) {
      destroy(person);
    },
    getPersonWithID(
      id: number
    ): undefined | SnapshotIn<typeof Person> | Instance<typeof Person> {
      for (let p of self.persons) {
        if ((p.id = id)) {
          return p;
        }
      }
      return undefined;
    },
  }))
  .views((self)=>({
    get poorestPerson(){
        let __poorest = self.persons[0]
        for (let p of self.persons) {
            if(p.balance<__poorest.balance){
                __poorest = p
            }
          }
        return __poorest;
    },
    get richestPerson(){
        let __richest = self.persons[0]
        for (let p of self.persons) {
            if(p.balance>__richest.balance){
                __richest = p
            }
          }
        return __richest;
    }
  }))
