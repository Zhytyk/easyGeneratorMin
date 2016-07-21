define(function () {

    function Education(spec) {
        this.id = spec.id;
        this.title = spec.title;
        this.creater = spec.creater;
        this.createdDate = spec.createdDate;
        this.lastUpdatedDate = spec.lastUpdatedDate;
    };

    return Education;
})