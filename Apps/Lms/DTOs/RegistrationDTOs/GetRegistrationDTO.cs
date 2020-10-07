using Lms.Models.Courses;
using Lms.Models.Users;

namespace Lms.DTOs.RegistrationDTOs {
    public class GetRegistrationDTO {
        public int Id { get; set; }
        public Course Course { get; set; }
        public int CourseId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}