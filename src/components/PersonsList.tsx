import { observer } from "mobx-react-lite";
import { useRootStore } from "../models/Root";
import { PersonInList } from "./PersonInList";
type PersonsListProps = {
  searchTerm: string;
};

export const PersonsList = observer(({ searchTerm }: PersonsListProps) => {
  const {
    store: { personList },
  } = useRootStore();

  var filteredData = personList.persons.filter((element) => {
    if (searchTerm == "") {
      return true;
    } else {
      for (let val of Object.values(element)) {
        if (JSON.stringify(val).includes(searchTerm)) {
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
