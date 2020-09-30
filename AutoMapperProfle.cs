using Api.Apps.Portfolio;
using Api.Apps.Portfolio.Models;
using AutoMapper;

namespace LMS
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<SendMessageDTO, Message>();
        }
    }
}