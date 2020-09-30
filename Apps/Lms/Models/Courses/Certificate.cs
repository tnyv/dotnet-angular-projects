namespace Lms.Models.Courses
{
    public class Certificate
    {
        public int Id { get; set; }
        public int CourseId {get; set;}
        public string CourseName { get; set; }
        public string DateEarned { get; set; }
    }
}