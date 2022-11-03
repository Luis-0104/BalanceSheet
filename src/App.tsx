import './styling/App.css'
import {SearchBar} from './components/SearchBar'
import { PersonsList } from './components/PersonsList'
import { useState } from 'react'
import { AddNewPerson } from './components/AddNewPerson'

function App() {
  const [showAddMenu, setShowAddMenu] = useState(false);
  function toggleShowAddMenu(){
    setShowAddMenu(!showAddMenu);
    console.log('toggled')
  }

  const [searchTerm, setSearchTerm] = useState('')


  return (
    <div className="App">
      <h1>BalanceSheet</h1>
      <div className="hdiv" id="topBar">
        <div>
          <button id="addButton" onClick={(evt)=>{toggleShowAddMenu() }}>+</button>
        </div>
        <div>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}></SearchBar>
        </div>
      </div>
      <AddNewPerson showAddMenu={showAddMenu} toggleShowAddMenu={toggleShowAddMenu}></AddNewPerson>
      <PersonsList searchTerm={searchTerm}></PersonsList>
    </div>
  )
}

export default App
