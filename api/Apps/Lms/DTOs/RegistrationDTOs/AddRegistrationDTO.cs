using Lms.Models.Courses;

namespace Lms.DTOs.RegistrationDTOs
{
    public class AddRegistrationDTO
    {
        public Course Course { get; set; }
        public int CourseId {get; set;}
    }
} 