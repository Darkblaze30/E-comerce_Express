export default class UserDto {
    constructor(data) {
        this.firstName = data.firstName
        this.lastName = data.lastName
        this.identificationNumber = data.identificationNumber
        this.identificationType = data.identificationType
        this.email = data.email
        this.phone = data.phone
        this.password = data.password
        this.userType = data.userType
        this.active = data.active
        this.registeredDate = data.registeredDate
        this.place = data.place
    }
}
