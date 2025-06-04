using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class NotificationDAL
    {
        SicoumProDBEntities DB = new SicoumProDBEntities();

        public List<Notification> GetNotification()
        {
            return DB.Notification.ToList();
        }
        public bool Add(Notification c)
        {
            try
            {
                DB.Notification.Add(c);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool Update(Notification n)
        {
            try
            {
                DB.Entry(n).State = EntityState.Modified;
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
