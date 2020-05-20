import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
    /* esling-disable */
    constructor(){
        super();
        alert('I am in constructor');
    }
    connectedCallback(){
        alert('I am in connected call back');
    }
    disconnectedCallback(){
        alert('I am in disconnected call back');
    }
    renderedCallback(){
        alert('I am in rendered call back');
    }
    errorCallback(error,stack){
        alert('I am in error call back');
    }
 
}