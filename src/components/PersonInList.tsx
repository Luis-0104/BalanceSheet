import { useState } from "react";

type personInListProps = {
    person: {
        id: any;
        name: string;
        email: string;
        balance: number;
    }
}

export function PersonInList({ person: person }: personInListProps) {

    const [showPersonMenu,setShowPersonMenu] = useState(false)

    function toggleShowPersonMenu(){
        setShowPersonMenu(!showPersonMenu);
      }
    function PersonMenu(){
        if(!showPersonMenu) return <></>
        return <div>
           <button>-1,5€</button>
           <button>-1€</button>
        </div>
    }

    return <div>
        <button onClick={(evt)=>{toggleShowPersonMenu()}}>
            {person.name + '   -   ' + person.balance + '€'}
        </button>
        {PersonMenu()}
        
    </div>
}