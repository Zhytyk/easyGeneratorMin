define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            router.map([
               { route: '', title: 'Main view', moduleId: 'viewmodels/mainpage', nav: true },
               { route: 'create/course', title: 'Create course', moduleId: 'viewmodels/createcoursepage', nav: true },
               { route: 'update/course/:id', title: 'Update course', moduleId: 'viewmodels/updatecoursepage', nav: true },
               { route: 'update/course/:courseId/section/:sectionId', title: 'Update section', moduleId: 'viewmodels/updatesectionpage', nav: true },
               { route: 'preview/course/:courseId', title: 'Preview mode', moduleId: 'viewmodels/previewmainpage', nav: true},
               { route: 'preview/course/:courseId/section/:sectionId', title: 'Preview section', moduleId: 'viewmodels/previewsectionpage', nav: true },
               { route: 'course/:courseId/section/:sectionId/create/selectquestion', title: 'Create selectQuestion', moduleId: 'viewmodels/createselectquestionpage', nav: true },
               { route: 'update/selectquestion/:selectquestionId', title: 'Update selectQuestion', moduleId: 'viewmodels/updateselectquestionpage', nav: true },
               { route: 'update/question/:selectquestionId/answer/:answerId', title: 'Update answer', moduleId: 'viewmodels/updateanswer', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});