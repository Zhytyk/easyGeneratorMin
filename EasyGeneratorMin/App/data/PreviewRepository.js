define(['data/previewContext', 'data/dataContext', 'data/sectionRepository'], function (previewContext, dataContext, sectionRepository) {
    function getPreviewSections(courseId) {
        return new Promise(function (resolve, reject) {
            if (!previewContext.sections) {
                previewContext.sections = [];

                previewContext.initializeSections(courseId)
                    .then(function () {
                        resolve(previewContext.sections);
                    })
            } else {
                resolve(previewContext.sections);
            }
        });
    };

    function getPreviewSectionById(courseId, sectionId) {
        return new Promise(function (resolve, reject) {
            return getPreviewSections(courseId)
                      .then(function (sections) {
                          var section = sections.find(function (section) {
                              return section.id === sectionId;
                          });
                          resolve(section);
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