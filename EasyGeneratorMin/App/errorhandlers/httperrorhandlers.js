define(function () {

    function dataIsNotFoundHandler() {
        return new Promise(
            (resolve, reject) => {
                reject("Data is not found");
            }
        )
            .catch(
                errorMessage => alert(errorMessage)
            );
    };

    function invalidDataHandler(errorMessage) {
        return new Promise(
            (resolve, reject) => {
                reject(errorMessage);
            }
        )
            .catch(
                errorMessage => alert(errorMessage)
            );
    };

    return {
        invalidDataHandler:  invalidDataHandler,
        dataIsNotFoundHandler: dataIsNotFoundHandler
    };
});