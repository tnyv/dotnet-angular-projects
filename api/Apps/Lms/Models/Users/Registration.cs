
using Lms.Models.Courses;

namespace Lms.Models.Users
{
    public class Registration
    {
        public int Id { get; set; }
        public Course Course { get; set; }
        public int CourseId {get; set;}
        public User User {get; set;}
        public int UserId {get; set;}
    }
}