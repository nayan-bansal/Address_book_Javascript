const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
const addressRegex = RegExp("^[A-Za-z0-9/,]{4,}$");
const placeRegex = RegExp("^[A-Z]{1}[A-Za-z\\s]{3,}$");
const zipRegex = RegExp("^[0-9]{3}\\s?[0-9]{3}$");
const phoneNoRegex = RegExp("^[1-9]{1}[0-9]{9}$");
const emailRegex = RegExp("^[a-z][0-9a-z_+-]*\\.?[0-9a-z_+-]+@\\w+(\\.[a-z]{2,}){1,2}$");

class Contact{

    constructor(firstname,lastname,address,city,state,zip,phonenumber,email){
        if(!nameRegex.test(firstname)) throw "invalid first name"
        this.firstname = this.firstname;
        if(!nameRegex.test(lastname)) throw "invalid last name"
        this.lastname = this.lastname;
        if(!addressRegex.test(address)) throw "invalid address name"
        this.address = this.address;
        if(!placeRegex.test(city)) throw "invalid city name"
        this.city = city;
        if(!placeRegex.test(state)) throw "invalid state name"
        this.state = state;
        if(!zipRegex.test(zip)) throw "invalid zip code"
        this.zip = zip;

        if(!phoneNoRegex.test(phonenumber)) throw "invalid phone number"
        this.phonenumber = phonenumber;

        if(!emailRegex.test(email)) throw "invalid email name"
        this.email = this.email;
        }

    toString(){
        return "\nFirst Name: "+this.firstname+"\nLast Name: "+this.lastname+"\nAddress: "+this.address+"\nCity: "+this.city+"\nState: "+this.state+"\nZip Code: "+this.zip+"\nPhone Number: "+this.phonenumber+"\nEmail ID: "+this.email ;
    }
}
try{
let AddressBook = new Contact("Nayan", "Bansal","Sector13","Karnal","Haryana","132001","9416029025","nayan.7991@gmail.com");
console.log("The Contacts in Address Book are: "+AddressBook);
}
catch(e){
    console.log(e);
}