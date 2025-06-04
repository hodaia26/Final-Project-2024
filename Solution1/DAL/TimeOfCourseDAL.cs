using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class TimeOfCourseDAL
    {
        SicoumProDBEntities DB = new SicoumProDBEntities();
        public List<TimesOfCourse> GetTimesOfCourses()
        {
            return DB.TimesOfCourse.ToList();
        }
        public bool Add(TimesOfCourse t)
        {
            try
            {
                DB.TimesOfCourse.Add(t);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Update(TimesOfCourse t)
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
        public bool Remove(TimesOfCourse t)
        {
            try
            {
                DB.TimesOfCourse.Attach(t);
                DB.TimesOfCourse.Remove(t);
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
