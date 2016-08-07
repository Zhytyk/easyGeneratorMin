using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin.DataAccess
{
    public class PreviewRepository : IPreviewRepository
    {
        private readonly IRepository<SelectQuestion> _selectQuestionsRepository;
        public PreviewRepository(IRepository<SelectQuestion> selectQuestionsRepository)
        {
            _selectQuestionsRepository = selectQuestionsRepository; 
        }


        public float GetResultCorrectAnswer(IEnumerable<SelectQuestion> questions)
        {
            var questionsWithCorrectAnswers = _selectQuestionsRepository.GetCollection();

            var multipleQuestionPoint = default(float);

            var singleQuestionPoint = questions.Count(question1 =>
            {
                var question2 = questionsWithCorrectAnswers.FirstOrDefault(o => o.Id == question1.Id);

                var numberOfCoincidences = GetNumberOfCoincidences(question1, question2);


                if (numberOfCoincidences == question1.Answers.Count )
                    return true;

                if(question2.Type == "Multiple")
                    multipleQuestionPoint += (float)numberOfCoincidences / question1.Answers.Count;

                return false;
            });

            return singleQuestionPoint + multipleQuestionPoint;
        }

        public int GetNumberOfCoincidences(SelectQuestion one, SelectQuestion two)
        {
            return one.Answers.Count(opt =>
            {
                var answer = two.Answers.FirstOrDefault(opti => opti.Id == opt.Id);
                if (answer.IsCorrectly == opt.IsCorrectly)
                    return true;

                return false;
            });
        }
    }
}
