using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Apps;
using Lms.DTOs.RegistrationDTOs;

namespace Lms.Services.RegistrationService
{
    public interface IRegistrationService
    {
        Task<ServiceResponse<List<GetRegistrationDTO>>> GetRegistrationList();
        Task<ServiceResponse<List<GetRegistrationDTO>>> GetAllRegistered();
        Task<ServiceResponse<List<GetRegistrationDTO>>> AddRegistration(AddRegistrationDTO newRegistration);
        Task<ServiceResponse<List<GetRegistrationDTO>>> DeleteRegistration(int id);
    }
}