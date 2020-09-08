using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Apps;
using Lms.DTOs.RegistrationDTOs;
using Lms.Services.RegistrationService;
using LMS.Models.Users.Role;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Lms.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/lms/[controller]")]
    public class RegistrationController : ControllerBase
    {
        private readonly IRegistrationService _registrationService;

        public RegistrationController(IRegistrationService registrationService)
        {
            _registrationService = registrationService;
        }

        [Authorize(Roles = Role.Admin)]
        [HttpGet("GetList")]
        public async Task<IActionResult> GetList()
        {
            return Ok(await _registrationService.GetRegistrationList());
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> Get()
        {
            return Ok(await _registrationService.GetAllRegistered());
        }

        [HttpPost]
        public async Task<IActionResult> AddRegistration(AddRegistrationDTO newRegistration)
        {
            return Ok(await _registrationService.AddRegistration(newRegistration));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            ServiceResponse<List<GetRegistrationDTO>> response = await _registrationService.DeleteRegistration(id);
            if (response.Data == null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }
    }
}