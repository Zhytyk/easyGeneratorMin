requirejs.config({
    paths: {
        'text': '../scripts/text',
        'durandal': '../scripts/durandal',
        'plugins': '../scripts/durandal/plugins',
        'transitions': '../scripts/durandal/transitions',
        'knockout': '../scripts/knockout-2.3.0',
        'jquery': '../scripts/jquery-1.9.1'
    }
});

define('jquery', [], function () { return jQuery; });
define('knockout', [], function () { return ko; });

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'durandal/composition', 'durandal/plugins/router'], function (system, app, viewLocator, composition, router) {

    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        router.map([
               { route: '', title: 'MainDurandal', moduleId: 'viewmodels/shell', nav: true },
        ]).buildNavigationModel();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });
});