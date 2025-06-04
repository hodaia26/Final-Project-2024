using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BLL
{
    public class MessageBLL
    {

        MessageDAL MessageDAL = new MessageDAL();
        public List<MessageDTO> GetMessage()
        {
            return Converter.MessageConverter.ConverttoDTOall(MessageDAL.GetMessage());
        }

        public bool Add(MessageDTO MessageDTO)
        {
            return MessageDAL.Add(Converter.MessageConverter.ConvertTODTO(MessageDTO));
        }
    }
}
