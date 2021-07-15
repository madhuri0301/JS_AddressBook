class AddressBook{
    constructor(...para){
        this.firstName = para[0];
        this.lastName = para[1];
        this.address = para[2];
        this.city = para[3];
        this.state = para[4];
        this.zip = para[5];
        this.phoneNum = para[6];
        this.email = para[7];
    }

    get firstName(){return this._firstName}
    set firstName(firstName){
        this._firstName = firstName;
    }

    get lastName(){return this._lastName}
    set lastName(lastName){
        this._lastName = lastName;
    }
    
    get address(){return this._address}
    set address(address){
        this._address = address;
    }
    
    get city(){return this._city}
    set city(city){
        this._city = city;
    }

    get zip(){return this._zip}
    set zip(zip){
        this._zip = zip;
    }

    get phoneNum(){return this._phoneNum}
    set phoneNum(phoneNum){
        this._phoneNum = phoneNum;
    }
    
    get email(){return this._email}
    set email(email){
        this._email = email;
    }

    toString(){
        return "\nFirstName = "+ this.firstName +", \nlastName = "+ this.lastName+ ", \nAddress = "+ this.address +", \nCity = "+ this.city +", \nState = "+ this.state +", \nZip = "+ this.zip +", \nPhoneNo = "+ this.phoneNum +", \nEmail = "+ this.email;
    }
}

let addressBook = new AddressBook("Madhuri","Patil","Gujar Lane","Shahada","Maharashtra","425409","9898767898","harshu@gmail.com")
console.log(addressBook.toString());