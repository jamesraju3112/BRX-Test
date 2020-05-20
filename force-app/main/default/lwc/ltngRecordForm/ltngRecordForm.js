import { LightningElement, api } from 'lwc';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Industry from '@salesforce/schema/Account.Industry';

export default class LtngRecordForm extends LightningElement {
    @api recordId;
    @api objectApiName;
    fields= [Account_Name,Account_Industry];
    handleSuccess(){
        alert('Sucess Called');
    }
}