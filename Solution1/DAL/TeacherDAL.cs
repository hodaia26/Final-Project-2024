using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class TeacherDAL
    {
        SicoumProDBEntities DB = new SicoumProDBEntities();
        public List<teacher> GetTeachers()
        {
            return DB.teacher.ToList();
        }
        public List<Ville> GetVille()
        {
            return DB.Ville.ToList();
        }
        public teacher GetTeacherById(int id)
        {
            return DB.teacher.Find(id);
        }
        public bool Add(teacher t)
        {
            try
            {
                DB.teacher.Add(t);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Update(teacher t)
        {
            try
            {
                DB.Entry(t).State = EntityState.Modified;
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Remove(teacher t)
        {
            try
            {
                DB.teacher.Attach(t);
                DB.teacher.Remove(t);
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
