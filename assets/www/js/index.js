
require.config({

    baseUrl: 'js',

    paths: {
        cordova: 'lib/cordova',
        handlebars: 'lib/handlebars',
        jquery: 'lib/jquery',
        jquerymobile: 'lib/jquery.mobile'
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

require(['game/app', 'cordova', 'handlebars', 'game/Resources', 'game/ViewManager'], function(app, cordova, Handlebars, resources, viewManager) {

    app.initialize();
});