using Api.Apps.Pos.Models;
using Lms.Models.Courses;
using Lms.Models.Users;
using Microsoft.EntityFrameworkCore;

namespace Api.Apps
{
    // This class is used for object relational modelling. It is essentially the connection/bridge between the database and
    // this backend .NET server.
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) => this.Database.Migrate();

        // Pos
        public DbSet<SaleEntry> SaleEntries { get; set; }

        // LMS
        public DbSet<User> Users { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Registration> Registrations { get; set; }
        public DbSet<TestQuestion> TestQuestions { get; set; }
    }
}