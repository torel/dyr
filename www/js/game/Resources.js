
define(['cordova'], function(cordova) {

	function Resources () {
		this.resources = [
			{ type: 'animal', name: 'and', img: 'img/and.png', sound: this.loadSound('sound/and.wav') },
			{ type: 'animal', name: 'geit', img: 'img/geit.png', sound: this.loadSound('sound/geit.wav') },
			{ type: 'animal', name: 'gris', img: 'img/gris.png', sound: this.loadSound('sound/gris.wav') },
			{ type: 'animal', name: 'hest', img: 'img/hest.png', sound: this.loadSound('sound/hest.wav') },
			{ type: 'animal', name: 'hund', img: 'img/hund.png', sound: this.loadSound('sound/hund.wav') },
			{ type: 'animal', name: 'katt', img: 'img/katt.png', sound: this.loadSound('sound/katt.wav') },
			{ type: 'animal', name: 'ku', img: 'img/ku.png', sound: this.loadSound('sound/ku.wav') },
			{ type: 'animal', name: 'sau', img: 'img/sau.png', sound: this.loadSound('sound/sau.wav') },
			{ type: 'animal', name: 'ugle', img: 'img/ugle.png', sound: this.loadSound('sound/ugle.wav') }
		];
	}

	Resources.prototype = {

        resources: null,

		loadSound: function(url) {
            var Media = cordova.require('cordova/plugin/Media');
            url = 'file:///android_asset/www/' + url;
			return new Media(url, function(){console.log('Sound ' + url + ' loaded successfully')}, function() {console.log('Failed to load sound ' + url)});
		},

		findResourcesByType: function(type) {
			var typedResrouces = [];

			this.resources.forEach(function(resource) {
				if (resource.type === type) {
					typedResrouces.push(resource);
				}
			});

			return typedResrouces;
		},

        findByName: function(name) {

            var result = null;

            this.resources.forEach(function(resource) {
                if (resource.name === name) {
                    result = resource;
                }
            });

            return result;
        }
	};

	return Resources;
});