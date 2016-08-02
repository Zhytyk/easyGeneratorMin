define(['models/selectQuestion'],function (SelectQuestion) {
    function MultipleSelectQuestion(spec) {
        SelectQuestion.call(this, spec);
    }
    return MultipleSelectQuestion;
});