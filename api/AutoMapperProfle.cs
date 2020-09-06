using AutoMapper;
using Api.DTOs.MessageDTOs;
using Api.Models;

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