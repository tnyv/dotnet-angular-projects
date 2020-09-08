using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Apps;
using Lms.DTOs.UserDTOs;
using Lms.Models.Users;

namespace Lms.Services.UserService
{
    public interface IUserService
    {
         Task<ServiceResponse<List<GetUserDTO>>> GetAllUsers();
         Task<ServiceResponse<GetUserDTO>> GetUserByEmail(string email);
         Task<ServiceResponse<GetUserDTO>> UpdateUser(UpdateUserDTO updatedUser);
         Task<ServiceResponse<List<GetUserDTO>>> DeleteUser(int id);
         Task<ServiceResponse<int>> Register(User user, string password);
         Task<ServiceResponse<string>> Login(string username, string password);
         Task<bool> UserExists(string username);
    }
}