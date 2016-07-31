define(['models/singleSelectQuestion'],function (singleSelectQuestion) {
    function MultipleSelectQuestion(spec) {
        singleSelectQuestion.call(this, spec);
    }
    return MultipleSelectQuestion;
});