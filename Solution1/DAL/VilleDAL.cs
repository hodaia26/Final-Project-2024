using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
  
        public class VilleDAL
        {
            SicoumProDBEntities DB = new SicoumProDBEntities();
            public List<Ville> GetVilles()
            {
                return DB.Ville.ToList();
            }

        }

    
}
