var app = app || {};

app.eventsDemo = (function(a){
    document.addEventListener("resume", onResume, false);
    document.addEventListener("online", onOnline, false);
    document.addEventListener("offline", onOffline, false);
    document.addEventListener("deviceready", onDeviceready, false);

    function onResume() {
        navigator.notification.alert("onResume");
    }
    
    function onOnline() {
        navigator.notification.alert("onOnline");
    }
    
    function onOffline() {
        navigator.notification.alert("onOffline");
    }
    
    function onDeviceready() {
        navigator.notification.alert("onDeviceready");
    }
        
    
})(app)
   