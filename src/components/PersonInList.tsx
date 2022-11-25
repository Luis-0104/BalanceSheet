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
        <button
          className="Getränk"
          onClick={(evt) => {
            updateBalance(-1.5);
          }}
        >
          -1,5€
        </button>
        <button
          className="Getränk"
          onClick={(evt) => {
            updateBalance(-1);
          }}
        >
          -1€
        </button>
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
        <button
          className="Admin"
          onClick={(evt) => {
            updateBalance(balanceInput);
          }}
        >
          addBalance
        </button>
        <button
          className="Admin"
          onClick={(evt) => {
            deletePerson();
          }}
        >
          DELETE
        </button>
      </>
    );
  };

  return (
    <div>
      <button
        onClick={(evt) => {
          toggleShowPersonMenu();
        }}
      >
        {person.name + "   -   " + person.balance + "€"}
      </button>
      <div>{PersonMenu()}</div>
    </div>
  );
}
