import { LightningElement,api } from 'lwc';
import testLabel from '@salesforce/label/c.testLabel';
import testResource from '@salesforce/resourceUrl/testResource';
import userid from '@salesforce/user/Id';
import ACCOUNT_OBJ from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.name';
import lang_import from '@salesforce/i18n/lang';
import locale from '@salesforce/i18n/locale';
import currency from '@salesforce/i18n/currency';
import timeZone from '@salesforce/i18n/timeZone';

export default class DesignLwcDemo extends LightningElement {
    @api greeting;
    @api heading;
    @api label ={
        testLabel,
        testResource,
        userid,
        ACCOUNT_OBJ,
        NAME_FIELD,
        lang_import,
        locale,
        currency,
        timeZone
        
    }

}