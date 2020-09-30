using System.Collections.Generic;
using Lms.Models.Courses;

namespace Lms.DTOs.CourseDTOs
{
    public class AddCourseDTO
    {
        public string Name { get; set; }
        public string Summary { get; set; }
        public List<Module> Modules { get; set; }
    }
}