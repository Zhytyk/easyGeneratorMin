define(['data/previewContext'], function (previewContext) {
    function getPassingCoursePoint() {
        return previewContext.passingCoursePoint;
    };


    function incrementPassingCoursePoint() {
        previewContext.passingCoursePoint++;
    };

    function resetPassingPoint() {
        previewContext.passingCoursePoint = 0;
    };

    return {
        getPassingCoursePoint: getPassingCoursePoint,
        incrementPassingCoursePoint: incrementPassingCoursePoint,
        resetPassingPoint: resetPassingPoint
    };
});