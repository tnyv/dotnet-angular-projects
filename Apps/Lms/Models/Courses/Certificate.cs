using System.ComponentModel.DataAnnotations;

namespace Lms.Models.Courses {
    public class Certificate {
        [Key]
        public int Id { get; set; }
        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public string DateEarned { get; set; }
    }
}