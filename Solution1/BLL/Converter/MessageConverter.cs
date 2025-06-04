using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BLL.Converter
{
    public class MessageConverter
    {
        public static MessageDTO ConvertTdODTO(Message c)
        {
            return new MessageDTO()
            {
                IdMessage = c.IdMessage,
                Texte = c.Texte,
                IdFrom = c.IdFrom,
                IdTo = c.IdTo,
                TypeFrom = c.TypeFrom,
                Time = c.Time,
                Date = c.Date,

            };

        }

        public static List<MessageDTO> ConverttoDTOall(List<Message> q)
        {
            return q.Select(a => ConvertTdODTO(a)).ToList();
        }

        public static Message ConvertTODTO(MessageDTO MessageDTO)
        {
            return new Message()
            {
                IdMessage = MessageDTO.IdMessage,
                Texte = MessageDTO.Texte,
                IdFrom = MessageDTO.IdFrom,
                IdTo = MessageDTO.IdTo,
                TypeFrom = MessageDTO.TypeFrom,
                Time = MessageDTO.Time,
                Date = MessageDTO.Date,

            };

        }
        public static List<Message> ConverttoDTOall(List<MessageDTO> q)
        {
            return (q.Select(a => ConvertTODTO(a)).ToList());
        }
    
}
}
