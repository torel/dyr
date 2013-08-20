
require.config({

    baseUrl: 'js',

    paths: {
        cordova: 'lib/cordova',
        handlebars: 'lib/handlebars',
        jquery: 'lib/jquery',
        jquerymobile: 'lib/jquery.mobile',
        tween: 'lib/tweenjs-0.4.1.min'
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

require(['game/app', 'cordova', 'handlebars', 'game/Resources', 'game/ViewManager', 'tween'], function(app, cordova, Handlebars, resources, viewManager, tween) {

    app.initialize();
});