import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShowToast extends LightningElement {
    ShowToast(){
        const event = new ShowToastEvent({
            title: 'Get Help',
            variant: 'sucess',
            message: 'Salesforce Toast Event example'
        })
        this.dispatchEvent(event);
        const event1 = new ShowToastEvent({
            title: 'Get Help',
            variant: 'error',
            mode: 'sticky',
            message: 'Salesforce Toast Event example'
        })
        this.dispatchEvent(event1);

    }
}