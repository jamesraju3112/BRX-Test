import { LightningElement, wire, track } from 'lwc';
import { getPicklistValues,getPicklistValuesByRecordType,getObjectInfo  } from 'lightning/uiObjectInfoApi';
import ACCOUNT_SOURCE from '@salesforce/schema/Account.AccountSource';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class PicklistDemo extends LightningElement {
    @track pickListValues;
    @track error;
    @track value;
    @track PicklistValuesByRecordType;
    @track AccountClassification;
    @track Status__c;
    @wire(getPicklistValues,{
        recordTypeId : '012000000000000AAA',
        fieldApiName: ACCOUNT_SOURCE

    })
    wiredPicklListValue({data,error}){
        if(data){

            console.log('Picklist values are ', (data.values));
            this.pickListValues = data.values;
            this.error = undefined;

        }
        if(error){
            console.log('Error for Picklist values are ', (error.values));

            this.pickListValues = undefined;
            this.error = error.values;
            ;

        }

    }
    @wire(getPicklistValuesByRecordType,{
        recordTypeId : '01236000000NuG3AAK',
        objectApiName : ACCOUNT_OBJECT
    })
    wiredRecordTypeValues({data,error}){
        if(data){
            console.log('Picklist Value',data);
            console.log('Industry picklist value',data.picklistFieldValues.Industry.values);
            this.PicklistValuesByRecordType = data.picklistFieldValues.Industry.values;
            this.AccountClassification = data.picklistFieldValues.Classification__c.values;
            this.Status__c = data.picklistFieldValues.Status__c.values;
        }
        if(error){
            console.log(error);
        }
    }
    @wire(getObjectInfo,{
        objectApiName : ACCOUNT_OBJECT
    })
    wiredObject({data,error}){
        if(data){
            console.log('Object Details',data);
            console.table(data);
        }
        if(error){
            console.log(console.error);
        }
    }
    handleChange(){
        
    }


}