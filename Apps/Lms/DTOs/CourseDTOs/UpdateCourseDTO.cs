using System.Collections.Generic;
using Lms.Models.Courses;

namespace Lms.DTOs.CourseDTOs {
    public class UpdateCourseDTO {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Summary { get; set; }
    }
}