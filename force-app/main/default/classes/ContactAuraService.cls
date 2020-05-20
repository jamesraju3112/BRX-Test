public with sharing class ContactAuraService {
    public ContactAuraService() {

    }
    /*
    @AuraEnabled(cacheable =true)
    public static list<sObject> getContactList(string name){
        string key = '%' +name+'%';
        string Query = 'Select id,name,email,phone from Contact where name LIKE :key';
        return Database.query(Query);
        
    }
    */
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(string name) {
        return [SELECT Id, Name, Title, Phone, Email FROM Contact LIMIT 10 ];
    }
    
    /*
    @AuraEnabled(cacheable =true)
    public static list<sObject> getAccountList(string name){
        string key = '%' +name+'%';
        string Query = 'Select id,name,Industry from Account where name LIKE :key';
        return Database.query(Query);
        
    }
    */
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(string name) {
        return [SELECT id,name,Industry FROM Account LIMIT 10 ];
    }

}
