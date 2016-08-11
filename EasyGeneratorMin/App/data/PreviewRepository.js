define(['data/previewContext', 'data/dataContext', 'data/sectionRepository'], function (previewContext, dataContext, sectionRepository) {
    function getPreviewSections(courseId) {
        return Q.fcall(function () {
            if (!previewContext.sections) {
                previewContext.sections = [];

                return previewContext.initializeSections(courseId)
                    .then(function () {
                        return previewContext.sections;
                    })
            } else {
               return previewContext.sections;
            }
        });
    };

    function getPreviewSectionById(courseId, sectionId) {
        return Q.fcall(function () {
            return getPreviewSections(courseId)
                      .then(function (sections) {
                          return _.find(sections, function (section) {
                              return section.id === sectionId;
                          });
                      });

        });
    };

    function getPassingCoursePoint() {
        return previewContext.passingCoursePoint;
    };

    function changePassingCoursePoint(newSectionProgressPoint, currentSectionProgressPoint) {
        previewContext.passingCoursePoint += newSectionProgressPoint -= currentSectionProgressPoint;
    };

    function resetPreviewMode() {
        previewContext.passingCoursePoint = 0;
        previewContext.sections = undefined;
    };

    return {
        getPreviewSections: getPreviewSections,
        getPreviewSectionById: getPreviewSectionById,
        getPassingCoursePoint: getPassingCoursePoint,
        changePassingCoursePoint: changePassingCoursePoint,
        resetPreviewMode: resetPreviewMode,
    };
});