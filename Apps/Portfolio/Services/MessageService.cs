using System.Threading.Tasks;
using AutoMapper;
using System.Net.Mail;
using System.Net;
using Microsoft.Extensions.Configuration;

namespace Api.Apps.Portfolio.Services
{
    public class MessageService : IMessageService
    {
        private readonly IMapper _mapper;
        private readonly IConfiguration Configuration;

        public MessageService(IMapper mapper, IConfiguration configuration)
        {
            _mapper = mapper;
            Configuration = configuration;
        }

        public Task<ServiceResponse<SendMessageDTO>> SendMessage(SendMessageDTO newMessage)
        {
            ServiceResponse<SendMessageDTO> serviceResponse = new ServiceResponse<SendMessageDTO>();

            serviceResponse.Data = newMessage;
            serviceResponse.Message = "New message successfully sent";

            var fromAddress = new MailAddress(Configuration["messenger"], newMessage.Name);
            var toAddress = new MailAddress(Configuration["destination"], "Tony");
            string fromPassword = Configuration["messengerKey"];
            string subject = newMessage.Subject + " " + newMessage.Email;
            string body = newMessage.MessageBody;

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                Credentials = new NetworkCredential(fromAddress.Address, fromPassword),
                Timeout = 20000
            };
            using (var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body
            })
            {
                smtp.Send(message);
            }

            return Task.FromResult(serviceResponse);
        }
    }
}