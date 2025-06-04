using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;


namespace BLL
{
    public class NotificationBLL
    {
        NotificationDAL NotificationDAL = new NotificationDAL();
        Notification Notification =new Notification(); 
 
        public List<NotificationDTO> GetNotification()
        {
            return Converter.NotificationConverter.ConverttoDTOall(NotificationDAL.GetNotification());
        }

        public bool Add(NotificationDTO NotificationDTO)
        {
            return NotificationDAL.Add(Converter.NotificationConverter.ConvertTODTO(NotificationDTO));
        }
       

        public bool Update(NotificationDTO NotificationDTO)
        {
            // Mettre à jour la propriété Readed à "1" pour chaque objet NotificationDTO dans la liste
            NotificationDTO.Readed = "1";

            return NotificationDAL.Update(Converter.NotificationConverter.ConvertTODTO(NotificationDTO));
        }


    }
}
