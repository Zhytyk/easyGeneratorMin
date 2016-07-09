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

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'durandal/composition', 'data/dataCourseInfoContext'], function (system, app, viewLocator, composition, dataCourseInfoContext) {

    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");
    app.title = "Courses";

    app.configurePlugins({
        router: true
    });

    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        dataCourseInfoContext.initializeCourses().then(function () {
            app.setRoot('viewmodels/shell', 'entrance');
        });
       
    });
});