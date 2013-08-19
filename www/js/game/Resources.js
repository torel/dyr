
define(['cordova', 'game/Util'], function(cordova, Util) {

	function Resources () {
		this.resources = [
			{ type: 'animal', name: 'and', img: 'img/and.png', sound: this.loadSound('and')},
			{ type: 'animal', name: 'geit', img: 'img/geit.png', sound: this.loadSound('geit') },
			{ type: 'animal', name: 'gris', img: 'img/gris.png', sound: this.loadSound('gris') },
			{ type: 'animal', name: 'hest', img: 'img/hest.png', sound: this.loadSound('hest') },
			{ type: 'animal', name: 'hund', img: 'img/hund.png', sound: this.loadSound('hund') },
			{ type: 'animal', name: 'katt', img: 'img/katt.png', sound: this.loadSound('katt') },
			{ type: 'animal', name: 'ku', img: 'img/ku.png', sound: this.loadSound('ku') },
			{ type: 'animal', name: 'sau', img: 'img/sau.png', sound: this.loadSound('sau') },
			{ type: 'animal', name: 'ugle', img: 'img/ugle.png', sound: this.loadSound('ugle') }
		];
	}

	Resources.prototype = {

        resources: null,

		loadSound: function(name) {

            var util = new Util();
            var sound = {
                wav: util.getPhoneGapPath() + 'sound/' + name + '.wav',
                ogg: util.getPhoneGapPath() + 'sound/' + name + '.ogg',
                mp3: util.getPhoneGapPath() + 'sound/' + name + '.mp3'
            };

            return sound;
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