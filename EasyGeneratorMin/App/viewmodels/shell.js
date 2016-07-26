define(['plugins/router'],function (router) {
    return {
        router: router,
        activate: function () {
            router.map([
               { route: '', title: 'Main View', moduleId: 'viewmodels/mainpage', nav: true },
               { route: 'createCourse', title: 'Create course', moduleId: 'viewmodels/createcoursepage', nav: true },
               { route: 'updateCourse/:id', title: 'Update course', moduleId: 'viewmodels/updatecoursepage', nav: true },
               { route: 'updateSection/:courseId/:sectionId', title: 'Update section', moduleId: 'viewmodels/updatesectionpage', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});