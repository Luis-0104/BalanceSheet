import "./styling/App.css";
import { SearchBar } from "./components/SearchBar";
import { PersonsList } from "./components/PersonsList";
import { AddNewPerson } from "./components/AddNewPerson";
import { useRootStore } from "./models/Root";
import { Typography } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Typography
      variant ='h2'

      
      >BalanceSheet</Typography>
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
