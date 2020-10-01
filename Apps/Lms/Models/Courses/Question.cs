
namespace Lms.Models.Courses
{
    public class Question
    {
        public int Id { get; set; }
        public string Q { get; set; }
        public string A { get; set; }
        public Course Course { get; set; }
        public int CourseId { get; set; }
    }
}