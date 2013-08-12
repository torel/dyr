/*

	This content manager uses a createjs.Stageand manifest as input, has following methods:
	.setDownloadComplete() - takes a callback function to start after download is completed
	.startDownload() - takes a manifest (Array) with ID and SRC as input, eksample:
	.assets - returns an array of objects containing reference to the assets loaded.
	example manifest:
	var manifest = [
		{id:"image1",src: "assets/img/image1.png"}
		]
*/

(function(window) {

	var ondownloadcompleted;
	var loadProgress;
	var preload;
	var numElementsLoaded = 0;
	var soundCount = 0;
	var width, height, that;


	function ContentManager(stage, manifest){
		this.initialize(stage, manifest);
	};

	ContentManager.prototype.initialize = function(stage, manifest) {
		this.stage = stage;
		this.manifest = manifest

		width = stage.canvas.width;
		height = stage.canvas.height;
		
		preload = new createjs.LoadQueue(true);
		preload.installPlugin(createjs.SoundJS);
		
		preload.onError =  handleElementError;
		preload.onFileLoad = handleElementLoad;

		loadProgress = new createjs.Text("-- %", "bold 14px Arial", "#FFF");
	    loadProgress.x = (width / 2) - 50;
	    loadProgress.y = height / 2;
	   	this.assets = []
	    that = this;

		
	};

	//Private functions
	function handleElementLoad(event) {
		numElementsLoaded++;
		that.assets[event.item.id] = preload.getResult(event.item.id);

		// If all elements have been downloaded
        if (numElementsLoaded === that.manifest.length) {
            that.stage.removeChild(loadProgress);
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

	ContentManager.prototype.startDownload = function() {			
			preload.loadManifest(this.manifest);
			this.stage.addChild(loadProgress);
			
			createjs.Ticker.addListener(this);
	        createjs.Ticker.setInterval(50);
	};

	ContentManager.prototype.tick = function() {
        loadProgress.text = "Loading " + Math.round((numElementsLoaded / this.manifest.length) * 100) + " %";
        this.stage.update();
    };

	window.ContentManager = ContentManager;

})(window);