using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DAL
{
    public class ClassesDAL
    {
        
        SicoumProDBEntities DB = new SicoumProDBEntities();
        public int GetIdByName(string n)
        {
            return DB.Classes.FirstOrDefault(a => a.NameClass.Trim() == n).IdClaases;
        }
        public List<Classes> GetClasses()
        {
            return DB.Classes.ToList();
        }
        public bool Add(Classes classes)
        {
            try
            {
                DB.Classes.Add(classes);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Update(Classes classes)
        {
            try
            {
                DB.Entry(classes);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Remove(Classes classes)
        {
            try
            {
                DB.Classes.Remove(classes);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public List<Classes> GetClasse()
        {
            return DB.Classes.ToList();
        }
    }
}
