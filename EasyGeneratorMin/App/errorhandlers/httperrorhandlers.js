define(function () {

    function dataIsNotFoundHandler(errorMessage) {
        return new Promise(
            (resolve, reject) => {
                reject(errorMessage || "Data is not found!");
            }
        )
            .catch(
                errorMessage => alert(errorMessage)
            );
    };

    function invalidDataHandler() {
        return new Promise(
            (resolve, reject) => {
                reject("You have inputed invalid data!");
            }
        )
            .catch(
                errorMessage => alert(errorMessage)
            );
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
        handler: handler,
        dataIsNotFoundHandler: dataIsNotFoundHandler
    };
});