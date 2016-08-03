

namespace EasyGeneratorMin.Models
{
    public class SelectAnswer : Entity 
    {
        public SelectQuestion SelectQuestion { get; set; }

        public bool IsCorrectly { get; set; }

        public SelectAnswer() { }

        public SelectAnswer(string title, SelectQuestion selectQuestion)
        {
            ThrowIfTitleInvalid(title);

            Title = title;
            SelectQuestion = selectQuestion;
        }

        public void Update(string title, string isCorrectly)
        {
            Update(title);

            IsCorrectly = isCorrectly == "true" ? true : false;
        }
    }
}
