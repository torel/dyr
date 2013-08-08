function Sound(animal) {
	this.animal = animal;
}

Sound.prototype = {
	constructor: Sound,

	play: function() {
		var url = "sound/" + this.animal + ".wav|sound/" + this.animal + ".ogg";
		createjs.Sound.play(url);
	}
}