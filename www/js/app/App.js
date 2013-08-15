
define(['cordova', 'jquery', 'app/ViewManager', 'app/Resources'], function(Cordova, $, ViewManager, Resources) {

	function App(viewManager, resources) {
		this.viewManager = new ViewManager();
		this.resources = new Resources();
        
		this.bindEvents();
	}	

	App.prototype = {

        resources: null,
        viewManager: null,

		constructor: App,

        // Bind Event Listeners
        //
        // Bind any events that are required on startup. Common events are:
        // 'load', 'deviceready', 'offline', and 'online'.
        bindEvents: function() {

            if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
                document.addEventListener('deviceready', this.onDeviceReady, false);
            }
            else {
                this.onDeviceReady();
            }

        },
        // deviceready Event Handler
        //
        // The scope of 'this' is the event. In order to call the 'receivedEvent'
        // function, we must explicity call 'app.receivedEvent(...);'
        onDeviceReady: function() {
            this.receivedEvent('deviceready');
        },
        // Update DOM on a Received Event
        receivedEvent: function(id) {
            var parentElement = document.getElementById(id);
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');

            console.log('Received Event: ' + id);

            $(parentElement).parent().remove();

            this.viewManager.renderView('animal', this.resources);
        }
    };

    return App;
});