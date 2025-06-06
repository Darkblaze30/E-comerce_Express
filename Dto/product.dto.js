export default class ProductDto {
    constructor(data){
        this.name = data.name,
        this.email = data.email,
        this.password = data.password,
        this.document_type = data.document_type,
        this.document_number = data.document_number,
        this.phone = data.phone,
        this.place = data.place,
        this.user_type = data.user_type,
        this.register_date = data.register_date,
        this.active = data.active
    }
}