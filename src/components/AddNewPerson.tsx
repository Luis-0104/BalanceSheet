import data from '../data/data.json'

type AddNewPersonProps = {
    showAddMenu: boolean;
    toggleShowAddMenu: () => void;
}


export function AddNewPerson({ showAddMenu, toggleShowAddMenu }: AddNewPersonProps) {

    var nameInput: string = '';
    var emailInput: string = '';
    var balanceInput: number = 0;

    function checkInput(): boolean {

        // check if name is already taken:
        data.map((element) => {
            if(element.first_name == nameInput){
                console.log(`Your chosen name: ${nameInput} is already taken`)
                return false;
            }
        })

        // check if email is valid
        if(!String(emailInput)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )){
            console.log(`${emailInput} isn't a valid email-adress`)
            return false;
        }


        return true;
    }


    if (!showAddMenu) {
        return <></>
    }
    console.log(nameInput)
    return <div id="AddNewPersonContainer">
        <input placeholder="Name" id="nameInput" onChange={(evt) => { nameInput = evt.target.value }}></input>
        <input placeholder="email" id="emailInput" type="email" onChange={(evt) => { emailInput = evt.target.value }}></input>
        <input placeholder="Starting Balance" id="balanceInput" type="number" min="0" step="any" onChange={(evt) => { balanceInput = +evt.target.value }}></input>
        €
        <button id="submitAddButton" onClick={(evt) => { checkInput() }}>Add</button>
    </div>
}