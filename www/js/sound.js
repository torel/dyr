function Sound(animal) {
	this.animal = animal;
}

Sound.prototype = {
	constructor: Sound,

	play: function() {
		var that = this;

		createjs.Sound.addEventListener("fileload", createjs.proxy(this.loadHandler, this));
 		createjs.Sound.registerSound("sound/" + that.animal + ".wav", that.animal);
		function loadHandler(event) {
			// This is fired for each sound that is registered.
			var instance = createjs.Sound.play(that.animal);  // play using id.  Could also use full sourcepath or event.src.
			instance.addEventListener("complete", createjs.proxy(this.handleComplete, this));
			instance.setVolume(0.5);
		}
	}
}