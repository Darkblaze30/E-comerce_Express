export default class ProductDto {
    constructor(data){
        this.code = data.code,
        this.name = data.name,
        this.description = data.description,
        this.image = data.image,
        this.price = data.price,
        this.stock = data.stock,
        this.condition = data.condition,
        this.vat = data.vat,
        this.categoryId = data.categoryId
    }
}