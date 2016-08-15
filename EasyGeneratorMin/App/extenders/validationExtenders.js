define(function () {

    var required = ko.extenders.required = function (target, overrideMessage) {
        target.hasError = ko.observable();
        target.validationMessage = ko.observable();
        function validate(newValue) {
            target.hasError(newValue ? false : true);
            target.validationMessage(newValue ? "" : overrideMessage || "This field is required");
        }
        validate(target());
        target.subscribe(validate);
        return target;
    }
    

    var rangeRequired = ko.extenders.rangeRequired = function (target, overrideMessage) {
        target.hasError = ko.observable();
        target.validationMessage = ko.observable();
        function validate(newValue) {
            var check = newValue ? target.hasError(!(newValue.length <= 255)) : target.hasError(true); 
            target.validationMessage( !check ? "" : overrideMessage || "This field have to has length in range from 1 to 255 symbols");
        }
        validate(target());
        target.subscribe(validate);
        return target;
    }

    var dateFormat = ko.extenders.dateFormat = function (target, overrideMessage) {
        target.hasError = ko.observable();
        target.validationMessage = ko.observable();

        var exp = /\d{4}-(0\d|1[0-2])-([0-2]\d|3[0-1])/i;
        function validate(newValue) {
            target.hasError(!exp.test(newValue));
            target.validationMessage(target.hasError() !== true ? "" : overrideMessage || "The date must be matched to format ####-##-## !");
        }
        validate(target());
        target.subscribe(validate);
        return target;
    }

    return {
        required: required,
        rangeRequired: rangeRequired,
        dateFormat: dateFormat,
    };
})
