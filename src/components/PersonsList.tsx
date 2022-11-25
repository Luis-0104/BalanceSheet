import { observer } from "mobx-react-lite";
import { useRootStore } from "../models/Root";
import { PersonInList } from "./PersonInList";


export const PersonsList = observer(() => {
  const {
    store: { personList, searchTerm },
  } = useRootStore();

  var filteredData = personList.persons.filter((element) => {
    if (searchTerm.val == "") {
      return true;
    } else {
      for (let val of Object.values(element)) {
        if (JSON.stringify(val).includes(searchTerm.val)) {
          return true;
        }
      }
    }
  });

  return (
    <div>
      {filteredData.map((val) => (
        <PersonInList key={val.id} person={val}></PersonInList>
      ))}
    </div>
  );
});
