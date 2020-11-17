class Contact{

    constructor(...ContactDetails){
        this.firstname = ContactDetails[0];
        this.lastname = ContactDetails[1];
        this.address = ContactDetails[2];
        this.city = ContactDetails[3];
        this.state = ContactDetails[4];
        this.zip = ContactDetails[5];
        this.phonenumber = ContactDetails[6];
        this.email = ContactDetails[7];
        }

    toString(){
        return "\nFirst Name: "+this.firstname+"\nLast Name: "+this.lastname+"\nAddress: "+this.address+"\nCity: "+this.city+"\nState: "+this.state+"\nZip Code: "+this.zip+"\nPhone Number: "+this.phonenumber+"\nEmail ID: "+this.email ;
    }
}

let AddressBook = new Contact("Nayan", "Bansal","Sector-13","Karnal","Haryana","132001","9416029025","nayan.7991@gmail.com");
console.log("The Contacts in Address Book are: "+AddressBook);