import { LightningElement, wire, track } from 'lwc';
import getContactList from '@salesforce/apex/ContactAuraService.getContactList';
import getAccountList from '@salesforce/apex/ContactAuraService.getAccountList';
export default class ContactListDemo extends LightningElement {
    @track searchKey;
    @track contacts;
    @track error;
    @track accounts;
    @track erroraccount;
    
    @wire(getContactList) contacts;

/*
    @wire(getContactList,{
        name : '$searchKey'
    }
        ) 
    wiredContact({error,data}){
        if(data){
            this.contacts = data;

        }
        if(error){
            this.error= error;

        }
    }
*/
    handleChange(event){
        event.preventDefault();
        /* eslint-disable no-console */
        console.log('value' + event.target.value);
        console.log(this.contacts);
        this.searchKey = event.target.value;
    }
    findAccounts(){
        getAccountList({
            name : this.searchKey
        })
        .then(result=>{
            this.accounts = result;
        /* eslint-disable no-console */
        console.log('value' + result);

        })
        .catch(error=>{
            this.erroraccounts =error;
        /* eslint-disable no-console */
        console.log('value' + error);

        })

    }

}