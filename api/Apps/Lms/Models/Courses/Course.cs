using System.Collections.Generic;
using Lms.Models.Users;

namespace Lms.Models.Courses
{
    public class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Summary { get; set; }
        public List<Module> Modules { get; set; }
        public List<Registration> Registrations { get; set; }
    }
}