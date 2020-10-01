using Lms.Models.Courses;

namespace Lms.DTOs.QuestionDTOs
{
    public class GetQDTO
    {
        public int Id { get; set; }
        public string Q { get; set; }
        public string A { get; set; }
        public Course Course { get; set; }
        public int CourseId { get; set; }
    }
}