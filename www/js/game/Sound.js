
define(['jquery', 'jquerymobile', 'game/Resources'], function($, $m, Handlebars, Resources) {

    function Sound() {
    }

    Sound.prototype = {

        constructor: Sound,

        play: function(resource) {
            if (navigator.userAgent.match(/Android/i)) {
                this.playPhoneGapMediaSound(resource);
            }
            else if (navigator.userAgent.match(/Chrome|Mozilla|AppleWebKit|Safari/i)) {
                this.playHtmlSound(resource);
            }
        },

        playHtmlSound: function(resource) {
            var audio = document.getElementById(resource.name + '-audio');
            audio.play();
        },

        playPhoneGapMediaSound: function(resource) {

            var Media = cordova.require('cordova/plugin/Media');
            var media = new Media(
                resource.sound.mp3,
                function(){
                    console.log('Sound ' + resource.name + ' loaded successfully')
                },
                function() {
                    console.log('Failed to load sound ' + resource.name)
                }
            );
            media.play();
        }
    };

    return Sound;
});