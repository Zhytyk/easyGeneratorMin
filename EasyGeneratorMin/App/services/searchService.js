define(['data/courseRepository'], function (courseRepository) {

    function searchCoursesByTitleAndIntervalDate(title, dateFrom, dateTo) {
        return courseRepository.getCourses()
            .then(function (courses) {

                return searchByDateTo(dateTo,
                    searchByDateFrom(dateFrom,
                    searchByTitle(title, courses)));
            });
    }

    function searchDataListCoursesByTitle(title) {
        return courseRepository.getCourses()
            .then(function (courses) {
                return searchByTitle(title, courses);
            });
    }

    function searchByTitle(title, courses) {
        if (title === "") {
            return courses;
        }

        var searchedCourses = [];
        var searchTitle = title.toLowerCase();

        _.each(courses, function (course) {

            if (course.title.length < searchTitle.length) {
                return;
            }

            var courseTitle = course.title.toLowerCase();

            for (var i = 0; i < searchTitle.length; i++) {
                if (searchTitle[i] !== courseTitle[i]) {
                    break;
                }

                if (i == searchTitle.length - 1) {
                    searchedCourses.push(course);
                }
            }
        });

        return searchedCourses;
    }

    function searchByDateFrom(dateFrom, courses) {
        if (dateFrom === "") {
            return courses;
        }

        var searchDateFrom = new Date(dateFrom);

        var searchedCourses = [];

        _.each(courses, function (course) {
            if (course.createdDate >= searchDateFrom) {
                searchedCourses.push(course);
            }
        });

        return searchedCourses;
    }

    function searchByDateTo(dateTo, courses) {
        if (dateTo === "") {
            return courses;
        }


        var searchDateTo = new Date(dateTo);

        var searchedCourses = [];

        _.each(courses, function (course) {
            if (course.createdDate <= searchDateTo) {
                searchedCourses.push(course);
            }
        });

        return searchedCourses;
    }

    return {
        searchCoursesByTitleAndIntervalDate: searchCoursesByTitleAndIntervalDate,
        searchDataListCoursesByTitle: searchDataListCoursesByTitle,
    };
});