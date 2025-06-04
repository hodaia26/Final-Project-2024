using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public  class FeedbackDAL
    {
        SicoumProDBEntities DB = new SicoumProDBEntities();
        public List<Feedback> GetFeedback()
        {
            return DB.Feedback.ToList();
        }
        public bool Add(Feedback feedback)
        {
            try
            {
                DB.Feedback.Add(feedback);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Update(Feedback feedback)
        {
            try
            {
                DB.Entry(feedback);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Remove(Feedback feedback)
        {
            try
            {
                DB.Feedback.Remove(feedback);
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
