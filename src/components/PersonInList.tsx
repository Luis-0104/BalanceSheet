import { useState } from "react";

type personInListProps = {
    data: {
        id: any;
        name: string;
        email: string;
        balance: number;
    }
}

export function PersonInList({ data }: personInListProps) {

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
            {data.name + '   -   ' + data.balance + '€'}
        </button>
        {PersonMenu()}
        
    </div>
}