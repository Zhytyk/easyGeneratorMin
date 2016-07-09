define(function () {

    function Course(param) {
        this.id = param.Id;
        this.title = param.Title;
        this.description = param.Description;
        this.owner = param.Owner;
        this.createdDate = param.CreatedDate;
        this.lastModifiedDate = param.LastModifiedDate
    }


    return Course;
})