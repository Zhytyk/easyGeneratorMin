

namespace EasyGeneratorMin.Models
{
    public class Answer : Entity 
    {
        public SelectQuestion SelectQuestion { get; set; }

        public bool IsCorrectly { get; set; }

        public Answer() { }

        public Answer(string title, string isCorrectly, SelectQuestion selectQuestion)
        {
            ThrowIfTitleInvalid(title);

            Title = title;
            IsCorrectly = bool.Parse(isCorrectly);
            SelectQuestion = selectQuestion;
        }

        public void Update(string title, string isCorrectly)
        {
            Update(title);

            IsCorrectly = bool.Parse(isCorrectly);
        }
    }
}
