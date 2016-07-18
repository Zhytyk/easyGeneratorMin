define(['plugins/router'],function (router) {
    return {
        router: router,
        activate: function () {
            router.map([
               { route: '', title: 'Main View', moduleId: 'viewmodels/mainpage', nav: true },
               { route: 'create', title: 'Create course', moduleId: 'viewmodels/createcoursepage', nav: true },
               { route: 'update/:id', title: 'Update course', moduleId: 'viewmodels/updatecoursepage', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    }
});