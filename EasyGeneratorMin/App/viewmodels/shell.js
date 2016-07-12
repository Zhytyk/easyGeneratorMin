define(['plugins/router'],function (router) {
    return {
        router: router,
        activate: function () {
            router.map([
               { route: '', title: 'Main View', moduleId: 'viewmodels/mainpage', nav: true },
               { route: 'addcourse', title: 'Add course', moduleId: 'viewmodels/addcoursepage', nav: true },
               { route: 'editcourse/:id', title: 'Edit course', moduleId: 'viewmodels/editcoursepage', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    }
});