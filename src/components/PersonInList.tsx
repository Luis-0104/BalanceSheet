import { useState } from "react";
import { balanceEmptyError } from "../errors/balanceEmptyError";

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
};

export function PersonInList({ person: person }: personInListProps) {
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

  const PersonMenu = () => {
    if (!showPersonMenu) return <></>;
    return (
      <div>
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
      </div>
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
      {PersonMenu()}
    </div>
  );
}
