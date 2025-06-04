using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class StudentDAL
    {
        SicoumProDBEntities DB = new SicoumProDBEntities();
        public List<student> GetStudents()
        {
            return DB.student.ToList();
        }
        public bool Add(student st)
        {
            try
            {
                DB.student.Add(st);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Update(student st)
        {
            try
            {
                DB.Entry(st).State = EntityState.Modified;
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Remove(student st)
        {
            try
            {

                DB.student.Attach(st);
                DB.student.Remove(st);
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
