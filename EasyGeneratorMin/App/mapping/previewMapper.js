define(function () {
    function mapSections(sections) {

        return sections.map(function (section) {

            return {
                id: section.id,
                title: section.title,
                progressPreview: 0,
            };
        });
    };

    return {
        mapSections: mapSections
    };
});