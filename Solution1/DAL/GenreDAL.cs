using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class GenreDAL
    {
        SicoumProDBEntities DB = new SicoumProDBEntities();
        public List<Genre> GetGenre()
        {
            return DB.Genre.ToList();
        }

        public bool Add(Genre G)
        {
            try
            {
                DB.Genre.Add(G);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Update(Genre G)
        {
            try
            {
                DB.Entry(G).State = EntityState.Modified;
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
