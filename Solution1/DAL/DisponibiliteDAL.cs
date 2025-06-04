using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class DisponibiliteDAL
    {
        SicoumProDBEntities DB = new SicoumProDBEntities();
        public List<Disponibilite> GetDisponibilite()
        {
            return DB.Disponibilite.ToList();
        }
        public bool Add(Disponibilite D)
        {
            try
            {
                DB.Disponibilite.Add(D);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Remove(Disponibilite t)
        {
            try
            {
                DB.Disponibilite.Attach(t);
                DB.Disponibilite.Remove(t);
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

