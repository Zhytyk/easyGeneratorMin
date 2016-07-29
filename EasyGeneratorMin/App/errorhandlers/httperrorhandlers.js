define(function () {

    function dataIsNotFoundHandler() {
        return new Promise(function(resolve, reject) {
                reject("Data is not found!");
            })
            .catch(function (errorMessage) {
                alert(errorMessage);
            });
    };

    function invalidDataHandler() {
        return new Promise(function(resolve, reject) {
                reject("You have inputed invalid data!");
            })
            .catch(function (errorMessage) {
                alert(errorMessage);
            });
    };

    function handler(statusCode) {
        switch (statusCode) {
            case 204:
                return invalidDataHandler();
            case 404:
                return dataIsNotFoundHandler();
        };
    };

    return {
        dataIsNotFoundHandler: dataIsNotFoundHandler,
        handler: handler,
    };
});