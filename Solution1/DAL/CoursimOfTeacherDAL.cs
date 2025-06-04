using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public  class CoursimOfTeacherDAL
    {
        SicoumProDBEntities DB = new SicoumProDBEntities();


        public List<CoursimOfTeacher> GetCoursimOfTeacher()
        {
            return DB.CoursimOfTeacher.ToList();
        }
        public bool Add(CoursimOfTeacher c)
        {
            try
            {
                DB.CoursimOfTeacher.Add(c);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public CoursimOfTeacher GetCoursimofteacherById(int id)
        {
            return DB.CoursimOfTeacher.Find(id);
        }
    }
}
