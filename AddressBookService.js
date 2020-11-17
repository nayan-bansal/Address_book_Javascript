const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
const addressRegex = RegExp("^[A-Za-z0-9/,]{4,}$");
const placeRegex = RegExp("^[A-Z]{1}[A-Za-z\\s]{3,}$");
const zipRegex = RegExp("^[0-9]{3}\\s?[0-9]{3}$");
const phoneNoRegex = RegExp("^[1-9]{1}[0-9]{9}$");
const emailRegex = RegExp("^[a-z][0-9a-z_+-]*\\.?[0-9a-z_+-]+@\\w+(\\.[a-z]{2,}){1,2}$");
const prompt=require('prompt-sync')();

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

//array to store contacts
let addressBookArray=new Array();
//add contacts to address book
let addContacts=()=>{
    let userFirstName=prompt("Enter First Name: ");
    let userLastName=prompt("Enter Last Name: ");
    let userAddress=prompt("Enter Address: ");
    let userCity=prompt("Enter City Name: ");
    let userState=prompt("Enter State Name: ");
    let userZip=prompt("Enter Zip Code: ");
    let userPhoneNumber=prompt("Enter Phone Number: ");
    let userEmailId=prompt("Enter Email id: ");
    try{
        let person=new Contact(userFirstName,userLastName,userAddress,userCity,userState,userZip,userPhoneNumber,userEmailId);
        addressBookArray.push(person);
        console.log("Contact Added: ");
    }catch(e){
        console.log(e);
    }
}

console.log("Welcome To AddressBook Program");
let userInput=0;
//calling add to addressbook method
do{
    userInput=prompt("Enter 1-Add contact 0-Exit: ");
    if(userInput==1){
        addContacts();
    }
}while(userInput!=0);
