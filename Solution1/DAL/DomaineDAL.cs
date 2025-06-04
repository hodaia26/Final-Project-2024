using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class DomaineDAL
    {
        SicoumProDBEntities DB = new SicoumProDBEntities();
        public List<Domain> GetDomain()
        {
            return DB.Domain.ToList();
        }
        public bool Add(Domain d)
        {
            try
            {
                DB.Domain.Add(d);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Update(Domain d)
        {
            try
            {
                DB.Entry(d);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Remove(Domain d)
        {
            try
            {
                DB.Domain.Attach(d);
                DB.Domain.Remove(d);
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
