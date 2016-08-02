define(['models/selectQuestion'], function (SelectQuestion) {
    function SingleSelectQuestion(spec) {
        SelectQuestion.call(this, spec);
    }
    return SingleSelectQuestion;
});