define(['plugins/router'],function (router) {
    return {
        router: router,
        activate: function () {
            router.map([
               { route: '', title: 'Main View', moduleId: 'viewmodels/mainpage', nav: true },
               { route: 'addcourse', title: 'Add course', moduleId: 'viewmodels/addcoursepage', nav: true },
               { route: 'updatecourse/:id', title: 'Update course', moduleId: 'viewmodels/updatecoursepage', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    }
});