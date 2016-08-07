define(['data/dataContext', 'http/httpWrapper'], function (dataContext, http) {
    function getPreviewResult(selectQuestions) {
        return http.post('get/previewresult', selectQuestions).then(function (result) {
            return result;
        });
    };


    return {
        getPreviewResult: getPreviewResult
    };
});