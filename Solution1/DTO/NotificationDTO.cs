using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class NotificationDTO
    {
        public int IdNotification { get; set; }
        public string Content { get; set; }
        public string Date { get; set; }
        public string Readed { get; set; }
        public Nullable<int> IdCourse { get; set; }


    }
}
