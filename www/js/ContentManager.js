/*

	This content manager uses a createjs.Stage as input, has following methods:
	.setDownloadComplete() - takes a callback function to start after download is completed
	.startDownload() - takes a manifest (Array) with ID and SRC as input, eksample:
		var manifest = [
		{id:"image1",src: "assets/img/image1.png"}
		]
	.assets - returns an array of objects containing reference to the assets loaded.

*/

(function(window) {

	var ondownloadcompleted;
	var downloadProgress;
	var preload;
	var numElementsLoaded = 0;
	var soundCount = 0;
	var width, height, that;


	function ContentManager(stage){
		this.initialize(stage);
	};

	ContentManager.prototype.initialize = function(stage) {
		width = stage.canvas.width;
		height = stage.canvas.height;
		
		preload = new createjs.LoadQueue(false);
		preload.installPlugin(createjs.SoundJS);
		
		preload.onError =  handleElementError;
		preload.onFileLoad = handleElementLoad;

		downloadProgress = new createjs.Text("-- %", "bold 14px Arial", "#FFF");
	    downloadProgress.x = (width / 2) - 50;
	    downloadProgress.y = height / 2;
	   	this.assets = []
	    that = this;

		
	}

	//Private functions
	function handleElementLoad(event) {
		numElementsLoaded++;
		that.assets[event.item.id] = event.result;
		
		// If all elements have been downloaded
        if (numElementsLoaded === manifest.length) {
            stage.removeChild(downloadProgress);
            createjs.Ticker.removeAllListeners();
            numElementsLoaded = 0;
            // we're calling back the method set by SetDownloadCompleted
            ondownloadcompleted();
        }
    }

	function handleElementError(e) {
	        console.log("Error Loading Asset : " + e.src);
			
	}

	//Public methods
	ContentManager.prototype.setDownloadCompleted = function (callbackMethod) {
	        ondownloadcompleted = callbackMethod;
	};

	ContentManager.prototype.startDownload = function(manifest) {			
			preload.loadManifest(manifest);
			stage.addChild(downloadProgress);
			
			createjs.Ticker.addListener(this);
	        createjs.Ticker.setInterval(50);
	};

	ContentManager.prototype.tick = function() {
        downloadProgress.text = "Downloading " + Math.round((numElementsLoaded / manifest.length) * 100) + " %";
        stage.update();
    };

	window.ContentManager = ContentManager;

})(window);