using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class CoursimDAL
    {
        SicoumProDBEntities DB = new SicoumProDBEntities();
       
        public coursim GetCourseById(int id)
        {
            return DB.coursim.Find(id);
        }
        public List<coursim> GetCoursim(string id)
        {
            return DB.coursim.ToList();
        }
        public List<coursim> GetCoursim()
        {
            return DB.coursim.ToList();
        }
        public bool Add(coursim c)
        {
            try
            {
                DB.coursim.Add(c);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Update(coursim c)
        {
            try
            {
                 DB.Entry(c).State = EntityState.Modified;
                //DB.Entry(c);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Remove(coursim c)
        {
            try

            {
                //attach=chercher la lignes avec nos données a supprimer.
                DB.coursim.Attach(c);
                DB.coursim.Remove(c);
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