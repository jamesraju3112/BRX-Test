public with sharing class LWCMapController {
    //private static final String LONG_RUNNING_SERVICE_URL_1 = 'https://raw.githubusercontent.com/parthiban019/samplejson/master/MapData.json';
    //private static final String LONG_RUNNING_SERVICE_URL_2 = 'https://raw.githubusercontent.com/parthiban019/samplejson/master/MapCoordinates.json';
    
    @AuraEnabled(continuation=true)
    public static Object startRequest() {
        
        Continuation con = new Continuation(40);
        con.continuationMethod='processResponse';
        con.state='Continuation State';
        
        
        HttpRequest req1 = new HttpRequest();
        req1.setMethod('GET');
        req1.setEndpoint(LONG_RUNNING_SERVICE_URL_1);
        con.addHttpRequest(req1);
        
        HttpRequest req2 = new HttpRequest();
        req2.setMethod('GET');
        req2.setEndpoint(LONG_RUNNING_SERVICE_URL_2);
        con.addHttpRequest(req2);
        return con;
    }
    
    @AuraEnabled
    public static Object processResponse(List<String> labels, Object state) {
        
        CalloutWrapper.ResponseWrapper ResponseWrapperIns = new CalloutWrapper.ResponseWrapper();

        HttpResponse response1 = Continuation.getResponse(labels[0]);
        if(response1.getBody() != null && response1.getStatusCode() == 200){
            system.System.debug('-->  Resp1 --> '+response1.getBody());
            ResponseWrapperIns.MapDataWrapperList = (List<CalloutWrapper.MapDataWrapper>)json.deserialize(response1.getBody(),List<CalloutWrapper.MapDataWrapper>.class);
        }
        
        HttpResponse response2 = Continuation.getResponse(labels[1]);
        if(response2.getBody() != null && response2.getStatusCode() == 200){
            ResponseWrapperIns.MapCoordinateWrapperList = (List<CalloutWrapper.MapCoordinateWrapper>)json.deserialize(response2.getBody(),List<CalloutWrapper.MapCoordinateWrapper>.class);
        }
        
        return json.serialize(ResponseWrapperIns);
    }
}