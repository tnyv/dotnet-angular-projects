using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Apps;
using Lms.DTOs.CourseDTOs;
using Lms.Services.CourseService;
using Microsoft.AspNetCore.Mvc;

namespace Lms.Controllers
{
    [ApiController]
    [Route("lms/[controller]")]
    public class CourseController : ControllerBase
    {
        private readonly ICourseService _courseService;

        public CourseController(ICourseService CourseService)
        {
            _courseService = CourseService;
        }

       [HttpGet("GetAll")]
        public async Task<IActionResult> Get()
        {
            return Ok(await _courseService.GetAllCourses());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSingle(int id)
        {
            return Ok(await _courseService.GetCourseById(id));
        }

        [HttpPost]
        public async Task<IActionResult> AddCourse(AddCourseDTO newCourse)
        {
            return Ok(await _courseService.AddCourse(newCourse));
        }

        [HttpPut]
        public async Task<IActionResult> UpdateCourse(UpdateCourseDTO updatedCourse)
        {
            ServiceResponse<GetCourseDTO> response = await _courseService.UpdateCourse(updatedCourse);
            if (response.Data == null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            ServiceResponse<List<GetCourseDTO>> response = await _courseService.DeleteCourse(id);
            if (response.Data == null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }
    }
}