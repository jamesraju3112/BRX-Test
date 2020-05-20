import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//ES6 module
const showToast = (variant = 'info',mode='dismissable',title,message) =>{
    const event = new ShowToastEvent({
        title: title,
        message: message,
        mode: mode,
        variant: variant
    });
    return event;

}
const showAlert = () =>{
    /* eslint-disable*/
    alert('I am inside the other module')
    }

//Export the module
export  {showToast,showAlert};
