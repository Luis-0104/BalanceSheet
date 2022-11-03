type personInListProps = {
    data: {
        id: any;
        first_name: string;
        email: string;
        balance: number;
    }
}

export function PersonInList({ data }: personInListProps) {

    return <div>
        <button>
            {data.first_name + '   -   ' + data.balance + '€'}
        </button>
        
    </div>
}