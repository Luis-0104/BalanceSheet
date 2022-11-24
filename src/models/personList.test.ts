import { getSnapshot } from "mobx-state-tree";

import { it } from "@jest/globals";
import { PersonList } from "./personList";

it("should create a model instance", () => {
  const personListTest = PersonList.create({
    persons: [
      {
        id: 0,
        name: "fooBar",
        email: "foobar@example.com",
      },
    ],
  });
  expect(getSnapshot(personListTest)).toEqual({
    persons: [
      {
        id: 0,
        name: "fooBar",
        email: "foobar@example.com",
        balance: 0,
      },
    ],
  });
});

it("test addPerson", () => {
  const personListTest = PersonList.create({
    persons: [
      {
        id: 0,
        name: "fooBar",
        email: "foobar@example.com",
      },
    ],
  });
  personListTest.addPerson({
    id: 1,
    name: "Human",
    email: "t@test.de",
    balance: 9,
  });

  expect(getSnapshot(personListTest)).toEqual({
    persons: [
      {
        id: 0,
        name: "fooBar",
        email: "foobar@example.com",
        balance: 0,
      },
      {
        id: 1,
        name: "Human",
        email: "t@test.de",
        balance: 9,
      },
    ],
  });
});

it("test removePerson", () => {
  const personListTest = PersonList.create({
    persons: [
      {
        id: 0,
        name: "fooBar",
        email: "foobar@example.com",
      },
    ],
  });
  personListTest.persons[0].remove()
  expect(getSnapshot(personListTest)).toEqual({
    persons: [],
  });
});

it("test getPersonWithID", () => {
  const personListTest = PersonList.create({
    persons: [
      {
        id: 0,
        name: "fooBar",
        email: "foobar@example.com",
      },
      {
        id: 1,
        name: "Human",
        email: "t@test.de",
        balance: 9,
      },
      {
        id: 2,
        name: "Berd das Brot",
        email: "bernd@brot.de",
        balance: 69,
      },
    ],
  });
  expect(personListTest.getPersonWithID(2)).toEqual({
    id: 2,
    name: "Berd das Brot",
    email: "bernd@brot.de",
    balance: 69,
  });
});

it("test get poorestPerson", () => {
  const personListTest = PersonList.create({
    persons: [
      {
        id: 0,
        name: "fooBar",
        email: "foobar@example.com",
      },
      {
        id: 1,
        name: "Human",
        email: "t@test.de",
        balance: 9,
      },
      {
        id: 2,
        name: "Berd das Brot",
        email: "bernd@brot.de",
        balance: 69,
      },
    ],
  });
  expect(personListTest.poorestPerson).toEqual({
    id: 0,
    name: "fooBar",
    email: "foobar@example.com",
    balance: 0,
  });
});

it("test get richestPerson", () => {
    const personListTest = PersonList.create({
      persons: [
        {
          id: 0,
          name: "fooBar",
          email: "foobar@example.com",
        },
        {
          id: 1,
          name: "Human",
          email: "t@test.de",
          balance: 9,
        },
        {
          id: 2,
          name: "Berd das Brot",
          email: "bernd@brot.de",
          balance: 69,
        },
      ],
    });
    expect(personListTest.richestPerson).toEqual({
      id: 2,
      name: "Berd das Brot",
      email: "bernd@brot.de",
      balance: 69,
    });
  });
  