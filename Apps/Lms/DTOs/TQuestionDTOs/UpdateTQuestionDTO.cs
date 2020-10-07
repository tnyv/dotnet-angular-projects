using Lms.Models.Courses;

namespace Lms.DTOs.QuestionDTOs {
    public class UpdateTQuestionDTO {
        public int Id { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public string Option1 { get; set; }
        public string Option2 { get; set; }
        public string Option3 { get; set; }
        public string Option4 { get; set; }
        public Course Course { get; set; }
        public int CourseId { get; set; }
    }
}