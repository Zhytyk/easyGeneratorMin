define(function () {
    $(document).ajaxError(function (event, request) {
        console.log(request);
        alert("Bad Request! Something has happend wrong!");
    });

    function dataIsNotFoundHandler() {
        return Q.fcall(function() {
                throw "Data is not found!";
            })
            .catch(function (errorMessage) {
                alert(errorMessage);
            });
    };
    return {
        dataIsNotFoundHandler: dataIsNotFoundHandler
    };
});