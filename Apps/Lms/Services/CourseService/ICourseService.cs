using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Apps;
using Lms.DTOs.CourseDTOs;
using Lms.DTOs.QuestionDTOs;

namespace Lms.Services.CourseService {
    public interface ICourseService {
        Task<ServiceResponse<List<GetCourseDTO>>> GetAllCourses();

        Task<ServiceResponse<GetCourseDTO>> GetCourseById(int id);

        Task<ServiceResponse<List<GetCourseDTO>>> AddCourse(AddCourseDTO newCourse);

        Task<ServiceResponse<GetCourseDTO>> UpdateCourse(UpdateCourseDTO updatedCourse);

        Task<ServiceResponse<List<GetCourseDTO>>> DeleteCourse(int id);

        Task<ServiceResponse<List<GetTQuestionDTO>>> GetAllQuestions();

        Task<ServiceResponse<List<GetTQuestionDTO>>> AddQuestion(AddTQuestionDTO newQuestion);
    }
}