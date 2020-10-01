using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Lms.Models.Courses;

namespace Lms.Models.Users
{
    public class User
    {
        [Key]
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