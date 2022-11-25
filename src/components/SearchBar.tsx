import { useRootStore } from "../models/Root";
import "./styling/SearchBar.css";

export function SearchBar() {
    
  const {
    store: { searchTerm },
  } = useRootStore();
  searchTerm.updateVal("")
  return (
    <div id="searchBarContainer" className="hdiv">
      <div>
        <input
          id="searchField"
          placeholder="Search..."
          onChange={(evt) => {
            searchTerm.updateVal(evt.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}
