using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Lms.Models.Users;

namespace Lms.Models.Courses {
    public class Course {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Summary { get; set; }
        public List<Registration> Registrations { get; set; }
        public List<TestQuestion> Questions { get; set; }
    }
}