
define(['cordova'], function(cordova) {

    function Util() {

    }

    Util.prototype = {

        /**
         * Gets path of www directory in PhoneGap.
         *
         * The various systems (iPhone, Android...) have different local file paths like:
         *
         * iPhone:
         *      /var/mobile/Applications/{GUID}/{appname}.app/www/index.html
         *
         * Android:
         *      /android_asset/www/index.html
         *
         * Therefore this method derives the absolute path of the PhoneGap directory www by using window.location.pathname.
         * This value equals the above paths. By removing index.html from this path string and prefixing with 'file://',
         * we get the www directory.
         *
         */


        getPhoneGapPath: function() {
            var path = '';

            if (navigator.userAgent.match(/Android/i)) {
                path = 'file:///android_asset/www/'
            }
            else if (navigator.userAgent.match(/Chrome|Mozilla|AppleWebKit|Safari/i)) {
                path = '';
            }
            else {
                //
            }

            console.log('User agent is: ' + navigator.userAgent);
            console.log('Path is: ' + path);

            return path;
        }
    };

    return Util;

});