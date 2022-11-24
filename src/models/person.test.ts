import { getSnapshot } from "mobx-state-tree";
import { Person } from "./person";
import { it } from "@jest/globals";
import { balanceEmptyError } from "../errors/balanceEmptyError";

it("test creating a model instance", () => {
  const personTest = Person.create({
    id: 0,
    name: "fooBar",
    email: "foobar@example.com",
  });

  expect(getSnapshot(personTest)).toEqual({
    id: 0,
    name: "fooBar",
    email: "foobar@example.com",
    balance: 0,
  });
});

it("test changeName", () => {
  const personTest = Person.create({
    id: 0,
    name: "fooBar",
    email: "foobar@example.com",
    balance: 420,
  });
  personTest.changeName("BarFoo");
  expect(getSnapshot(personTest)).toEqual({
    id: 0,
    name: "BarFoo",
    email: "foobar@example.com",
    balance: 420,
  });
});

it("test changeEmail", () => {
  const personTest = Person.create({
    id: 0,
    name: "fooBar",
    email: "foobar@example.com",
    balance: 420,
  });
  personTest.changeEmail("foobar@gmail.com");
  expect(getSnapshot(personTest)).toEqual({
    id: 0,
    name: "fooBar",
    email: "foobar@gmail.com",
    balance: 420,
  });
});

it("test updateBalance", () => {
  const personTest = Person.create({
    id: 0,
    name: "fooBar",
    email: "foobar@example.com",
    balance: 420,
  });
  personTest.updateBalance(-100);
  expect(getSnapshot(personTest)).toEqual({
    id: 0,
    name: "fooBar",
    email: "foobar@example.com",
    balance: 320,
  });
});

it("test balanceEmptyError", () => {
  const personTest = Person.create({
    id: 0,
    name: "fooBar",
    email: "foobar@example.com",
    balance: 90,
  });
  //        V Test callback-function
  expect(() => {
    personTest.updateBalance(-100);
  }).toThrow(
    new balanceEmptyError(
      "fooBar with id 0 currently has a balance of 90, so 100 cannot be subtracted"
    )
  );
});
