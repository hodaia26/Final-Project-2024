using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class MessageDAL
    {

        SicoumProDBEntities DB = new SicoumProDBEntities();

        public List<Message> GetMessage()
        {
            return DB.Message.ToList();
        }
        public bool Add(Message c)
        {
            try
            {
                DB.Message.Add(c);
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

