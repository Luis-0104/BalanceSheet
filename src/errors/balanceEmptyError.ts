export class balanceEmptyError extends Error {
    constructor(message:string){
        if(message==''){
            message = 'default balance EmptyError'
        }
        super(message)
        this.name='balanceEmptyError'
    }
}