import { LightningElement,track,wire } from 'lwc';
import mapDemo from '@salesforce/apex/lwcUtilityClass.mapDemo';
import testName from '@salesforce/apex/lwcUtilityClass.testName';

export default class LogicalLwcDemo extends LightningElement {
    @track greeting = "Welcome James!";
    @track message ="LWC Message";
    @track recordsTest;
    @track error;
    @track maps;
    @track contacts = [
        {
            id : '001',
            Name :  'James Raju'
        },
        {
            id : '002',
            Name :  'Alex Raju'
            
        },
        {
            id : '003',
            Name :  'Wilson Raju'
            
        },
        {
            id : '004',
            Name :  'Elizabeth Raju'
            
        }
    ];
    
    @wire(testName) 
    wiredData({error,data}){
        if(data){
            this.recordsTest = data;
        /* eslint-diable no-console */
        console.log(this.recordsTest);

        }
        if(error){
            this.error= error;
        /* eslint-diable no-console */
        console.log(this.error);

        }
    }
    @wire(mapDemo) records;
    /* eslint-diable no-console */
    //console.log(records);
    handleClick(){
        mapDemo().then(result=> {
           console.log(result);     
           const options = [];
            for(let key in result){
                if(key){
                    options.push({
                        key : key,
                        value : result[key]
                    })
                }
            }
            console.log(options);
            this.maps = options;
        })
        .catch(error => {
            this.error = error;
        })
    }
}