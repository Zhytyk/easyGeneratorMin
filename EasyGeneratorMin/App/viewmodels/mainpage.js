define(['durandal/app', 'plugins/router', 'data/dataContext', 'data/courseRepository', 'data/sectionRepository', 'mapping/viewMapper', 'preview/data/previewRepository', 'services/dataService', 'services/searchService', 'extenders/validationExtenders'],
    function (app, router, dataContext, courseRepository, sectionRepository, viewMapper, previewRepository, dataService, searchService, validationExtenders) {

    return {
        courses: ko.observableArray([]),
        searchTitle: ko.observable(),
        searchDateFrom: ko.observable().extend({ dateFormat: '' }),
        searchDateTo: ko.observable().extend({ dateFormat: '' }),
        searchedCoursesTitles: ko.observableArray([]),
        activate: function () {
            var self = this;
            previewRepository.resetPreviewMode();

            this.searchTitle('');
            this.searchDateFrom('2016-08-01');
            this.searchDateTo(new Date().toISOString());

            return courseRepository.getCourses()
                .then(function (courses) {

                    self.isDisabledSearcher = ko.computed(function () {
                        return self.searchDateFrom.hasError() == true || self.searchDateTo.hasError() == true;
                    });

                    self.courses(viewMapper.coursesMapper(courses));
                    return self.searchDataList();
                });
        },
        createCourse: function () {
            router.navigate("#create/course");
        },
        updateCourse: function (course) {
            router.navigate("#update/course/" + course.id);
        },
        updateSection: function(section) {
            router.navigate("#update/course/" + section.courseId + "/section/" + section.id);
        },
        removeCourse: function (course) {
            var self = this;
            courseRepository.removeCourse(course.id)
                .then(function () {
                    self.courses.remove(course);
                });
        },
        removeSection: function (section) {
            var self = this;
            sectionRepository.removeSection(section.id, section.courseId)
                .then(function () {
                    var course = self.courses().find(function (course) {
                        return course.id == section.courseId;
                    });

                    course.sections.valueHasMutated();
                });
        },
        previewCourse: function (course) {
            router.navigate("#preview/course/" + course.id);
        },
        search: function (elem) {
            var self = this;

            searchService.searchCoursesByTitleAndIntervalDate(this.searchTitle(), this.searchDateFrom(), this.searchDateTo())
                .then(function (searchedCourses) {
                    self.courses(viewMapper.coursesMapper(searchedCourses));
                });
        },
        searchDataList: function () {
            var self = this;
            return searchService.searchDataListCoursesByTitle(this.searchTitle())
                .then(function (courses) {
                    self.searchedCoursesTitles(courses.map(function (course) {
                        return course.title;
                    }));
                });
        },
        isDisabledSearcher: '',
    };
})