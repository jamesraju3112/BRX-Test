public with sharing class BrixmorLightningSearchController {
    public BrixmorLightningSearchController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> findContacts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [
            SELECT Id, Name, Title, Phone, Email ,account.name
            FROM Contact
            WHERE Name LIKE :key 
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    } 
    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [
            SELECT id,name,Industry,phone,Classification__c,New_NAICS_Description__c,billingcity,billingstate,billingpostalcode
            FROM Account
            WHERE Name LIKE :key 
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    } 

}
