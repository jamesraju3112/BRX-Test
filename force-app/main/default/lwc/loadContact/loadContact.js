import { LightningElement, api, track, wire } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {getRecord,getFieldValue,createRecord} from 'lightning/uiRecordApi';


const FIELDS = ['Contact.Name','Contact.Phone','contact.email'];


export default class LoadContact extends LightningElement {
    @api recordId;
    @track contact;
    @track name;
    @track phone;
    @track email;
    @track accountName;
    @wire(getRecord,{recordId: '$recordId',field : FIELDS,modes : ['view'],layoutTypes : [FULL]})
    wiredRecord({data,error}){

        if(error){
            let message ='Unknown error';
            if( Array.isArray(error.body) ){
                message = error.body.map (e => e.message).join(',');
            } else if( typeof error.body.message === 'string' ) {
                message = error.body,message;
                }
        } else if(data){
        this.contact = data;
        console.log('Contact Information',this.contact)
        this.name = this.contact.fields.FirstName.value;
        this.accountName = this.contact.fields.Account.value.fields.Name.Value;
        console.log('this.accountName',this.accountName);

    }
}

}