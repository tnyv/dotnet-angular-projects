using System.Threading.Tasks;
using Api.DTOs.MessageDTOs;
using Api.Models;

namespace Api.Services.MessageService
{
    public interface IMessageService
    {
        Task<ServiceResponse<SendMessageDTO>> SendMessage(SendMessageDTO newMessage);
    }
}