define(function () {

    function OwnerData(param) {
        this.owner = param.Owner;
        this.createdDate = param.CreatedDate;
        this.lastModifiedDate = param.LastModifiedDate;
    }
    return OwnerData;
})