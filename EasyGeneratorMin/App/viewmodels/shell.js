define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            router.map([
               { route: '', title: 'Main View', moduleId: 'viewmodels/mainpage', nav: true },
               { route: 'create/course', title: 'Create course', moduleId: 'viewmodels/createcoursepage', nav: true },
               { route: 'update/course/:id', title: 'Update course', moduleId: 'viewmodels/updatecoursepage', nav: true },
               { route: 'update/section/:courseId/:sectionId', title: 'Update section', moduleId: 'viewmodels/updatesectionpage', nav: true },
               { route: ':courseId/:sectionId/create/selectquestion', title: 'Create SelectQuestion', moduleId: 'viewmodels/createselectquestionpage', nav: true },
               { route: 'update/selectquestion/:selectquestionId', title: 'Update SingleSelectQuestion', moduleId: 'viewmodels/updatesingleselectquestionpage', nav: true },
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});