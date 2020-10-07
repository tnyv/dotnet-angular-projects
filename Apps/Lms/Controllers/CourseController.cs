using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Apps;
using Lms.DTOs.CourseDTOs;
using Lms.DTOs.QuestionDTOs;
using Lms.Services.CourseService;
using LMS.Models.Users.Role;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Lms.Controllers {
    [Authorize]
    [ApiController]
    [Route("api/lms/[controller]")]
    public class CourseController : ControllerBase {
        private readonly ICourseService _courseService;

        public CourseController(ICourseService CourseService) {
            _courseService = CourseService;
        }

        [AllowAnonymous]
        [HttpGet("GetAll")]
        public async Task<IActionResult> Get() {
            return Ok(await _courseService.GetAllCourses());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSingle(int id) {
            return Ok(await _courseService.GetCourseById(id));
        }

        [Authorize(Roles = Role.Admin)]
        [HttpPost]
        public async Task<IActionResult> AddCourse(AddCourseDTO newCourse) {
            return Ok(await _courseService.AddCourse(newCourse));
        }

        [Authorize(Roles = Role.Admin)]
        [HttpPut]
        public async Task<IActionResult> UpdateCourse(UpdateCourseDTO updatedCourse) {
            ServiceResponse<GetCourseDTO> response = await _courseService.UpdateCourse(updatedCourse);
            if (response.Data == null) {
                return NotFound(response);
            }
            return Ok(response);
        }

        [Authorize(Roles = Role.Admin)]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id) {
            ServiceResponse<List<GetCourseDTO>> response = await _courseService.DeleteCourse(id);
            if (response.Data == null) {
                return NotFound(response);
            }
            return Ok(response);
        }

        [HttpGet("GetQuestions")]
        public async Task<IActionResult> GetQuestions() {
            return Ok(await _courseService.GetAllQuestions());
        }

        [Authorize(Roles = Role.Admin)]
        [HttpPost("Question")]
        public async Task<IActionResult> AddQuestion(AddTQuestionDTO newQuestion) {
            return Ok(await _courseService.AddQuestion(newQuestion));
        }
    }
}