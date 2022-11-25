import { getSnapshot } from "mobx-state-tree";
import { Searchterm } from "./searchTerm";

it("should create a model instance", () => {
  const searchTermTest = Searchterm.create({
    val: "Hello World",
    isAdmin: false,
  });
  expect(getSnapshot(searchTermTest)).toEqual({
    val: "Hello World",
    isAdmin: false,
  });
});

it("test updateVal", () => {
    const searchTermTest = Searchterm.create({
      val: "Hello World",
      isAdmin: false,
    });
    searchTermTest.updateVal("foo")

    expect(getSnapshot(searchTermTest)).toEqual({
      val: "foo",
      isAdmin: false,
    });
  });

it("test updateVal and admin enable", () => {
    const searchTermTest = Searchterm.create({
      val: "Hello World",
      isAdmin: false,
    });
    searchTermTest.updateVal("asdf")

    expect(getSnapshot(searchTermTest)).toEqual({
      val: "asdf",
      isAdmin: true,
    });
  });

it("test admin disable", () => {
    const searchTermTest = Searchterm.create({
      val: "Hello World",
      isAdmin: true,
    });
    searchTermTest.exitAdmin()

    expect(getSnapshot(searchTermTest)).toEqual({
      val: "Hello World",
      isAdmin: false,
    });
  });
