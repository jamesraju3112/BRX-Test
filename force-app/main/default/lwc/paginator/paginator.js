import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {
    handleNext(){
        const testMessage = 'This is test value';
        const nextEvent = new CustomEvent('next',{ detail : testMessage});
        this.dispatchEvent(nextEvent);
    }
    handlePrev(){
        const testMessage = 'This is test value';
        const prevEvent = new CustomEvent('previous',{ detail : testMessage});
        this.dispatchEvent(prevEvent);
    }

}