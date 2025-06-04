using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class SubjectOfCoursimDAL
    {

        SicoumProDBEntities DB = new SicoumProDBEntities();
        public List<SubjectOfCoursim> GetSubject()
        {
            return DB.SubjectOfCoursim.ToList();
        }
        public bool Add(SubjectOfCoursim su)
        {
            try
            {
                DB.SubjectOfCoursim.Add(su);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Update(SubjectOfCoursim su)
        {
            try
            {
                DB.Entry(su);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Remove(SubjectOfCoursim su)
        {
            try
            {
                DB.SubjectOfCoursim.Remove(su);
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
