using System.Threading.Tasks;
using Api.Apps.Portfolio.Services;
using Microsoft.AspNetCore.Mvc;

namespace Api.Apps.Portfolio.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MessageController : ControllerBase
    {
        private readonly IMessageService _messageService;

        public MessageController(IMessageService MessageService)
        {
            _messageService = MessageService;
        }

        [HttpPost]
        public async Task<IActionResult> SendMessage(SendMessageDTO newMessage)
        {
            return Ok(await _messageService.SendMessage(newMessage));
        }

    }
}