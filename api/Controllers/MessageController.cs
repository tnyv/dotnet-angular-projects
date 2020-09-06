using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Api.DTOs.MessageDTOs;
using Api.Models;
using Api.Services.MessageService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
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