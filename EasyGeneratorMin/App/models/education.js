﻿define(function () {

    function Education(param) {
        this.id = param.Id;
        this.title = param.Title;
        this.creater = param.Creater;
        this.createdDate = param.CreatedDate;
        this.lastUpdatedDate = param.LastUpdatedDate;
    }
    return Education;
})