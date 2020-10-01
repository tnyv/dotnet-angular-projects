using System.Collections.Generic;
using Lms.Models.Courses;
using Lms.Models.Users;

namespace Lms.DTOs.CourseDTOs
{
    public class GetCourseDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Summary { get; set; }
        public List<Registration> Registrations { get; set; }
    }
}