import { useState } from "react";
import { useRootStore } from "../models/Root";
import "./styling/SearchBar.css";

export function SearchBar() {
  const {
    store: { searchTerm },
  } = useRootStore();
  const [searchTermState, setSearchTermState] = useState(searchTerm.val);
  return (
    <div id="searchBarContainer" className="hdiv">
      <div>
        <input
          id="searchField"
          placeholder="Search..."
          value={searchTermState}
          onChange={(evt) => {
            setSearchTermState(evt.target.value);
            searchTerm.updateVal(evt.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearchTermState("");
              searchTerm.updateVal("");
              console.log("enter");
            }
          }}
        ></input>
      </div>
    </div>
  );
}
