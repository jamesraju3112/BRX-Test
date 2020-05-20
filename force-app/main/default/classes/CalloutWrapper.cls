public with sharing class CalloutWrapper {
   
    public class LocationData {
        public String City{get;set;}
        public String Country{get;set;}
    }

    public class LocationCoordinate {
        public String Latitude{get;set;}
        public String Longitude{get;set;}
    }

   public class MapDataWrapper{
        public LocationData location{get;set;}
        public String icon{get;set;}
        public String title{get;set;}
   }

   public class MapCoordinateWrapper{
       public LocationCoordinate location{get;set;}
        public String icon{get;set;}
        public String title{get;set;}
   }

    public class ResponseWrapper {
        public List<MapCoordinateWrapper> MapCoordinateWrapperList{get;set;}
        public List<MapDataWrapper> MapDataWrapperList{get;set;}
    }
}