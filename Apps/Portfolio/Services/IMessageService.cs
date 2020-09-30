using System.Threading.Tasks;

namespace Api.Apps.Portfolio.Services
{
    public interface IMessageService
    {
        Task<ServiceResponse<SendMessageDTO>> SendMessage(SendMessageDTO newMessage);
    }
}