
import './styling/SearchBar.css'


export function SearchBar() {
    return <div id="searchBarContainer" className='hdiv'>
        <div>
            <input id ="searchField"></input>
        </div>
        <div>
            <button id ="searchButton">S</button>
        </div>
    </div>
}