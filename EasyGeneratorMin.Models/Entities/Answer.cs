using System.Linq;

namespace EasyGeneratorMin.Models
{
    public class Answer : Entity 
    {
        public SelectQuestion SelectQuestion { get; set; }

        public bool IsCorrectly { get; set; }

        public Answer()
        {
            IsCorrectly = false;
        }

        public Answer(string title, SelectQuestion selectQuestion)
        {
            ThrowIfTitleInvalid(title);

            Title = title;
            SelectQuestion = selectQuestion;
        }

        public void Update(string title, string isCorrectly)
        {
            Update(title);

            IsCorrectly = bool.Parse(isCorrectly);


        }
    }
}
