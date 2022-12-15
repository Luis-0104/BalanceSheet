import { Button } from "@material-ui/core";
import { useState } from "react";

type personInListProps = {
  person: {
    id: any;
    name: string;
    email: string;
    balance: number;
    updateBalance: (difference: number) => void;
    changeEmail: (newEmail: string) => void;
    remove: () => void;
  };
  searchTerm: {
    val: string;
    isAdmin: boolean;
    exitAdmin: () => void;
  };
};

export function PersonInList({
  person: person,
  searchTerm: searchTerm,
}: personInListProps) {
  const [showPersonMenu, setShowPersonMenu] = useState(false);
  const updateBalance = (val: number) => {
    try {
      person.updateBalance(val);
    } catch (error: any) {
      alert(error.message);
    }
    toggleShowPersonMenu();
  };

  const toggleShowPersonMenu = () => {
    setShowPersonMenu(!showPersonMenu);
  };

  const deletePerson = () => {
    if (
      confirm(
        `Are you sure, you want to delete ${person.name}? This action cannot be reversed!`
      )
    ) {
      person.remove();
      toggleShowPersonMenu();
    }
  };

  const PersonMenu = () => {
    if (!showPersonMenu) return <></>;
    return (
      <>
        <Button
        variant="outlined"
          className="Getränk"
          onClick={(evt) => {
            updateBalance(-1.5);
          }}
        >
          -1,5€
        </Button>
        <Button
          className="Getränk"
          onClick={(evt) => {
            updateBalance(-1);
          }}
        >
          -1€
        </Button>
        {AdminMenu()}
      </>
    );
  };

  const AdminMenu = () => {
    if (!searchTerm.isAdmin) return <></>;

    let balanceInput = 0;
    return (
      <>
        {" "}
        <input
          id="addBalanceField"
          placeholder="Balance"
          onChange={(evt) => {
            balanceInput = +evt.target.value;
          }}
        ></input>
        <Button
          variant = "outlined"
          className="Admin"
          onClick={(evt) => {
            updateBalance(balanceInput);
          }}
        >
          add Balance
        </Button>
        <Button
          className="Admin"
          onClick={(evt) => {
            deletePerson();
          }}
        >
          DELETE
        </Button>
      </>
    );
  };

  return (
    <div>
      <Button
        onClick={(evt) => {
          toggleShowPersonMenu();
        }}
      >
        {person.name + "   -   " + person.balance + "€"}
      </Button>
      <div>{PersonMenu()}</div>
    </div>
  );
}
