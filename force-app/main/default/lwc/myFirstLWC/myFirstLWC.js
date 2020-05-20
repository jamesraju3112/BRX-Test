import { LightningElement,api,track } from 'lwc';
import id from '@salesforce/user/Id';
export default class MyFirstLWC extends LightningElement {
    @api name = 'James Raju';
    @track title = 'Sr IT Analyst';
    phone = '7328874949';
    email ='jamesraju@hotmail.com';
    userId = id;
    handleclick(){
        /*eslint-disable no-console */
        console.log('I am inside the JS file');
        this.name='Wilson Raju';
        this.title='Electirical Tech';
        //alert('I am inside the JS file')
    }
}