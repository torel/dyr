Game = {

	contentManager: 0,

	manifest: [
		{id:"and", src:"sound/and.wav"},
		{id:"geit", src:"sound/geit.wav"},
		{id:"gris", src:"sound/gris.wav"},
		{id:"hest", src:"sound/hest.wav"},
		{id:"hund", src:"sound/hund.wav"},
		{id:"katt", src:"sound/katt.wav"},
		{id:"ku", src:"sound/ku.wav"},
		{id:"sau", src:"sound/sau.wav"},
		{id:"ugle", src:"sound/ugle.wav"}

	],

	init: function() {
		app.initialize();
		var canv = document.getElementById("loadCanvas");
		var stage = new createjs.Stage(canv);

		Game.contentManager = new ContentManager(stage, this.manifest);
		Game.contentManager.setDownloadCompleted(this.startGame)
		Game.contentManager.startDownload()

        
            

	},

	startGame: function () {

		$('#loadCanvas').hide();
		$('#animal-matrix').show();	
		
		$('.animalSound').on('click', 'td',function(e) {
			var animal = $(this).attr('id')
			var animalSound = Game.contentManager.assets[animal].src;
            // var sound = new Sound(animal);
            createjs.Sound.play(animalSound);
        });	

	}




};