import DefaultData from '../data/data.json'
type PersonsListProps = {
    searchTerm: string;
}



export function PersonsList({ searchTerm }: PersonsListProps) {

    var data: { id: any; first_name: string; email: string; balance: number; }[];
    if(localStorage.getItem('data')==null){
        data = DefaultData;
        console.log('using default data')
    }else{
        let dataString = localStorage.getItem('data')
        data =JSON.parse(dataString as string)
    }

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