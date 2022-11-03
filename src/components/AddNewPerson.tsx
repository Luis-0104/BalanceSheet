import { ReactNode, useEffect, useState } from 'react';
import DefaultData from '../data/data.json'; 


type AddNewPersonProps = {
    showAddMenu: boolean;
    toggleShowAddMenu: () => void;
}


export function AddNewPerson({ showAddMenu, toggleShowAddMenu }: AddNewPersonProps) {

    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [balanceInput, setBalanceInput] = useState(0)
    const [inputHint, setInputHint] = useState('')

    // var data = ...localStorage.getItem('data')
    var data: { id: any; first_name: string; email: string; balance: number; }[];
    if(localStorage.getItem('data')==null){
        data = DefaultData;
        console.log('using default data')
    }else{
        let dataString = localStorage.getItem('data')
        data = JSON.parse(dataString as string)
    }
    
    function checkNameInput() {
        //check if name is empty
        if (nameInput == '') {
            setInputHint(`Name cannot be empty!`)
            return false;
        }

        // check if name is taken
        for (let element of data) {
            if (element.first_name == nameInput) {
                setInputHint(`Your chosen name: ${nameInput} is already taken!`);
                return false;
            }
        }

        if(inputHint.includes('Name cannot be empty!')||inputHint.includes('is already taken!')){
            setInputHint('')
            checkBalanceInput();
            checkEmailInput();
        }
        return true;

    }

    function checkEmailInput() {
        // check if email is empty
        if (emailInput == '') {
            setInputHint(`The Email-Adress cannot be empty!`)
            return false;
        }

        // check if email is valid
        if (!String(emailInput)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
            setInputHint(`${emailInput} isn't a valid email-adress!`);
            return false;
        }

        if(inputHint.includes('isn\'t a valid email-adress')){
            setInputHint('')
            checkBalanceInput();
            checkNameInput();
        }

        return true;
    }

    function checkBalanceInput() {
        // check if startingBalance is valid
        if (balanceInput > 100 || balanceInput < 0) {
            setInputHint(`${balanceInput}€ isn't a valid starting balance. The starting balance has to be between 0€ and 100€!`);
            return false;
        }
        if(inputHint.includes(`isn't a valid starting balance. The starting balance has to be between 0€ and 100€!`)){
            setInputHint('')
            checkEmailInput();
            checkNameInput();
        }

        
        return true;

    }

    function checkInput(): boolean {
        if ((checkBalanceInput() && checkNameInput() && checkEmailInput())) {
            setInputHint('');
            return true;
        }
        return false;
    }

    function addPerson() { 
        if(!checkInput()) return;
        data.push({
            id: data.length,
            first_name: nameInput,
            email: emailInput,
            balance: balanceInput
        })
        const jsonString = JSON.stringify(data);
        
        localStorage.setItem('data', jsonString)

        setInputHint(`Succesfully added ${nameInput} to the system!`)
        setTimeout(() => {
            setInputHint('')
            toggleShowAddMenu()
            location.reload()
        }, 3000);

    }

    useEffect(()=>{
        setInputHint('');
        console.log('useeffect triggered');
    },[showAddMenu])

    if (!showAddMenu) {
        return <></>
    }


    return <div id="AddNewPersonContainer">
        <input placeholder="Name" id="nameInput" onChange={(evt) => setNameInput(evt.target.value)} onBlur={(evt) => { checkNameInput(); }}></input>
        <input placeholder="email" id="emailInput" type="email" onChange={(evt) => setEmailInput(evt.target.value)} onBlur={(evt) => { checkEmailInput(); }}></input>
        <input placeholder="Starting Balance" id="balanceInput" type="number" min="0" step="any" onChange={(evt) => setBalanceInput(+evt.target.value)} onBlur={(evt) => { checkBalanceInput(); }}></input>
        €
        <button id="submitAddButton" onClick={(evt) => { addPerson() }}>Add</button>
        <div>{inputHint}</div>
    </div>
}