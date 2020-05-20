public with sharing class lwcUtilityClass {
    public lwcUtilityClass() {

    }
    @AuraEnabled(cacheable=true)
    public static Map<String,Integer> mapDemo(){
        Map<String,Integer> testMap = new Map<String,Integer>();
        testMap.put('James Raju',1);
        testMap.put('Alexander Raju',2);
        testMap.put('Wilson Raju',3);
        testMap.put('Elizabeth Raju',4);
        return testMap;
    }
    @AuraEnabled(cacheable=true)
    public static string testName(){
        return 'Test String';
    }

    @AuraEnabled(cacheable =true)
    public static list<sObject> getContactList(string name){
        string key = '%' +name+'%';
        string Query = 'Select id,name,email,phone from Contact  where name LIKE :key WITH SECURITY_ENFORCED';
        return Database.query(Query);
        
    }
    @AuraEnabled(cacheable =true)
    public static list<sObject> getAccountList(string name){
        string key = '%' +name+'%';
        string Query = 'Select id,name,Industry from Account where name LIKE :key WITH SECURITY_ENFORCED';
        return Database.query(Query);
        
    }

}
