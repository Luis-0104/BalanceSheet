import data from '../data/data.json'
type PersonsListProps = {
    searchTerm: string;
}



export function PersonsList({ searchTerm }: PersonsListProps) {
    var filteredData = data.filter((element) => {
        if(searchTerm==''){
            return true;
          }else{
            for(let val of Object.values(element) ){
              if(JSON.stringify(val).includes(searchTerm)){
                return true;
              }
            }
            
          }
    })




    return <div>
        {filteredData.map(
            (val) => <div>
                <button>
                    {val.first_name + '   -   ' + val.balance + '€'}
                </button>
            </div>
        )}
    </div>
}