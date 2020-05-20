import { LightningElement,api} from 'lwc';
import startRequest from '@salesforce/apexContinuation/LWCMapController.startRequest';

export default class LWC_Map extends LightningElement {
    @api  MapDataWrapperList;
    @api  MapCoordinateWrapperList;

    startRequest() {
        this.loaded = true;
        startRequest()
        .then(result => {
            var parsedVal = JSON.parse(result);
            
            this.MapCoordinateWrapperList = parsedVal.MapCoordinateWrapperList;
            console.log('MapCoordinateWrapperList -->  '+JSON.stringify(this.MapCoordinateWrapperList));

            
            this.MapDataWrapperList = parsedVal.MapDataWrapperList;
            console.log('MapDataWrapperList -->  '+JSON.stringify(this.MapDataWrapperList));

            this.loaded = false;
        })
        .catch(error => {
            this.error = error;
        });
    }
   
}