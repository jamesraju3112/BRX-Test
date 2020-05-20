public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [SELECT Id, Name, Title, Phone, Email FROM Contact LIMIT 10 ];
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> findContacts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [
            SELECT Id, Name, Title, Phone, Email 
            FROM Contact
            WHERE Name LIKE :key 
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    } 
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT id,name,Industry FROM Account LIMIT 10 ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [
            SELECT id,name,Industry 
            FROM Account
            WHERE Name LIKE :key 
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    } 

}   