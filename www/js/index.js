
require.config({

    baseUrl: 'js',

    paths: {
        cordova: 'lib/cordova',
        handlebars: 'lib/handlebars',
        jquery: 'lib/jquery'
    },

    // Configure non-AMD modules
    shim: {
        cordova: {
            exports: 'cordova'
        },
        handlebars: {
            exports: 'Handlebars'
        }

    }
});

require(['app/App', 'cordova', 'handlebars', 'app/Resources', 'app/ViewManager'], function(App, cordova, Handlebars, resources, viewManager) {

    var exec = cordova.require('cordova/exec');
    var media = cordova.require('cordova/plugin/Media');
    new App();
});