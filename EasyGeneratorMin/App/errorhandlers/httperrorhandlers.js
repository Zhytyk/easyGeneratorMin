define(function () {

    function dataIsNotFoundHandler() {
        return new Promise(
            (resolve, reject) => {
                reject("Data is not found!");
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
    };
});