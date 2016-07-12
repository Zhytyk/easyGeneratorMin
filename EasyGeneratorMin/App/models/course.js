define(['models/ownerData'], function (ownerData) {

    function Course(param) {
        ownerData.call(this, param);
        this.id = param.Id;
        this.title = param.Title;
        this.description = param.Description;
    }

    return Course;
})