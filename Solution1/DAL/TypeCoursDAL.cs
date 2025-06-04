using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class TypeCoursDAL
    {
        SicoumProDBEntities DB = new SicoumProDBEntities();
        public List<TypeCours> GetTypeCours()
        {
            return DB.TypeCours.ToList();
        }

    }

}
