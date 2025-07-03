export default class SalesDto {
    constructor(data){
        this.reference = data.reference,
        this.date = data.date,
        this.paymentMethod = data.paymentMethod
        this.client = data.client
        this.seller = data.seller
        this.details = data.details
    }
    
};
