requirejs.config({
    paths: {
        'text': '../scripts/text',
        'durandal': '../scripts/durandal',
        'plugins': '../scripts/durandal/plugins',
        'transitions': '../scripts/durandal/transitions',
        'knockout': '../scripts/knockout-2.3.0',
        'jquery': '../scripts/jquery-1.9.1',
        'q': '../scripts/q',
        'underscore': '../scripts/underscore'
    }
});

define('jquery', [], function () { return jQuery; });
define('knockout', [], function () { return ko; });
define('q', [], function () { return Q; });
define('underscore', [], function () { return _; });

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'durandal/composition', 'data/dataContext'], function (system, app, viewLocator, composition, dataContext) {

    system.debug(true);
    
    app.title = "Courses";

    app.configurePlugins({
        router: true,
        dialog: true
    });

    app.start().then(function () {

        viewLocator.useConvention();
        
        dataContext.initializeCourses().then(function () {
            app.setRoot('viewmodels/shell', 'entrance');
        });
    });
});