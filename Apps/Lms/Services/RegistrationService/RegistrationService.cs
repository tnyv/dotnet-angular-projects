using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using Api.Apps;
using Lms.DTOs.RegistrationDTOs;
using Lms.Models.Users;

namespace Lms.Services.RegistrationService {
    public class RegistrationService : IRegistrationService {
        private readonly IMapper _mapper;
        private readonly DataContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public RegistrationService(IMapper mapper, DataContext context, IHttpContextAccessor httpContextAccessor) {
            _context = context;
            _mapper = mapper;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<ServiceResponse<List<GetRegistrationDTO>>> GetRegistrationList() {
            ServiceResponse<List<GetRegistrationDTO>> serviceResponse = new ServiceResponse<List<GetRegistrationDTO>>();
            List<Registration> dbRegistrations = await _context.Registrations.ToListAsync();
            serviceResponse.Data = (dbRegistrations.Select(c => _mapper.Map<GetRegistrationDTO>(c))).ToList();
            return serviceResponse;
        }

        // GetUserId() is only used in methods where we want to return the data associated with the specific token/user like GetAllRegistered(). 
        public int GetUserId() => int.Parse(_httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
        public async Task<ServiceResponse<List<GetRegistrationDTO>>> GetAllRegistered() {
            ServiceResponse<List<GetRegistrationDTO>> serviceResponse = new ServiceResponse<List<GetRegistrationDTO>>();
            List<Registration> dbRegistrations = await _context.Registrations.Where(r => r.User.Id == GetUserId()).ToListAsync();
            serviceResponse.Data = (dbRegistrations.Select(c => _mapper.Map<GetRegistrationDTO>(c))).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetRegistrationDTO>>> AddRegistration(AddRegistrationDTO newRegistration) {
            ServiceResponse<List<GetRegistrationDTO>> serviceResponse = new ServiceResponse<List<GetRegistrationDTO>>();

            Registration registration = _mapper.Map<Registration>(newRegistration);
            // Associating new registration with user's JWT claim "u => u.Id == GetUserId()"
            registration.User = await _context.Users.FirstOrDefaultAsync(u => u.Id == GetUserId());

            await _context.Registrations.AddAsync(registration);
            await _context.SaveChangesAsync();

            serviceResponse.Data = (_context.Registrations.Select(c => _mapper.Map<GetRegistrationDTO>(c))).ToList();
            serviceResponse.Message = "User has succesfully registered to course.";
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetRegistrationDTO>>> DeleteRegistration(int id) {
            ServiceResponse<List<GetRegistrationDTO>> serviceResponse = new ServiceResponse<List<GetRegistrationDTO>>();
            try {
                Registration registrations = await _context.Registrations.FirstAsync(c => c.Id == id);
                _context.Registrations.Remove(registrations);
                await _context.SaveChangesAsync();
                serviceResponse.Data = (_context.Registrations.Select(c => _mapper.Map<GetRegistrationDTO>(c))).ToList();
            } catch (Exception ex) {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            return serviceResponse;
        }
    }
}