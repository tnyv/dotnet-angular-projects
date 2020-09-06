using System.Threading.Tasks;
using Api.Apps.Portfolio.Models;

namespace Api.Apps.Portfolio.Services
{
    public interface IMessageService
    {
        Task<ServiceResponse<SendMessageDTO>> SendMessage(SendMessageDTO newMessage);
    }
}