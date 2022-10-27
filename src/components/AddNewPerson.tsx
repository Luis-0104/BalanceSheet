type AddNewPersonProps= {
    showAddMenu: boolean;
    toggleShowAddMenu: ()=> void;
}


export function AddNewPerson({showAddMenu,toggleShowAddMenu}:AddNewPersonProps){

    if(!showAddMenu){
        return <></>
    }
    return <div id="AddNewPersonContainer">
        <input placeholder="Name" id= "nameInput"></input>
        <input placeholder="Starting Balance" id="balanceInput" type="number" min="0" step="any"></input>
        €
        <button id = "submitAddButton" onClick={(evt)=>{toggleShowAddMenu()}}>Add</button>
    </div>
}