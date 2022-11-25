import "./styling/App.css";
import { SearchBar } from "./components/SearchBar";
import { PersonsList } from "./components/PersonsList";
import { useState } from "react";
import { AddNewPerson } from "./components/AddNewPerson";

function App() {
  return (
    <div className="App">
      <h1>BalanceSheet</h1>
      <div className="hdiv" id="topBar">
        <div></div>
        <div>
          <SearchBar></SearchBar>
        </div>
      </div>
      <AddNewPerson></AddNewPerson>
      <PersonsList></PersonsList>
    </div>
  );
}

export default App;
