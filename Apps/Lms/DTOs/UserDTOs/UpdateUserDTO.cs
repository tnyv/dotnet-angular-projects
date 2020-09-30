using System.Collections.Generic;
using Lms.Models.Courses;
using Lms.Models.Users;

namespace Lms.DTOs.UserDTOs
{
    public class UpdateUserDTO
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Organization { get; set; }
        public string Role { get; set; }
        public int Points { get; set; }
        public List<Certificate> Certificates { get; set; }
        public List<Registration> Registrations { get; set; }
    }
}