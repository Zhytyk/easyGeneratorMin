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
    };
    var rangeRequired = ko.extenders.rangeRequired = function (target, overrideMessage) {
        target.hasError = ko.observable(true);
        target.validationMessage = ko.observable();
        function validate(newValue) {
            var check = newValue ? target.hasError(!(newValue.length <= 255)) : target.hasError(true); 
            target.validationMessage( !check ? "" : overrideMessage || "This field have to has length in range from 1 to 255 symbols");
        }
        validate(target());
        target.subscribe(validate);
        return target;
    };
    return {
        required: required,
        rangeRequired: rangeRequired
    }
})
