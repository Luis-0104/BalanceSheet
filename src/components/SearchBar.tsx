
import './styling/SearchBar.css'

type SearchBarProps = {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
}

export function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
    return <div id="searchBarContainer" className='hdiv'>
        <div>
            <input id="searchField" placeholder='Search...' onChange={(evt) => {
                    setSearchTerm(evt.target.value)
                }
            }>
                
            </input>
        </div>

    </div>
}