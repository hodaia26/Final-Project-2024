using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
using System.Web.Routing;

namespace BLL.Converter
{
    public class NotificationConverter
    {
        public static NotificationDTO ConvertTdODTO(Notification c)
        {
            return new NotificationDTO()
            {
                IdNotification = c.IdNotification,
                Content = c.Content,
                Readed = c.Readed,
                IdCourse = (int)c.IdCourse,
                Date = c.Date,

            };

        }

        public static List<NotificationDTO> ConverttoDTOall(List<Notification> q)
        {
            return q.Select(a => ConvertTdODTO(a)).ToList();
        }

        public static Notification ConvertTODTO(NotificationDTO NotificationDTO)
        {
            return new Notification()
            {
                IdNotification = NotificationDTO.IdNotification,
                Content = NotificationDTO.Content,
                Readed = NotificationDTO.Readed,
                IdCourse = NotificationDTO.IdCourse,
                Date = NotificationDTO.Date,

            };

        }
        public static List<Notification> ConverttoDTOall(List<NotificationDTO> q)
        {
            return (q.Select(a => ConvertTODTO(a)).ToList());
        }




    }
}
