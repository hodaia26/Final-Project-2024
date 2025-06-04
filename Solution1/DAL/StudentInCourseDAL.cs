using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class StudentInCourseDAL
    {
        SicoumProDBEntities DB = new SicoumProDBEntities();
        public List<StudentInCourse> GetSIC()
        {
            return DB.StudentInCourse.ToList();
        }

        //public List<StudentInCourse> getCoursesStudentbyid()
        //{
        //    // Effectuer une jointure entre les tables courses et teacher
        //    var coursesWithTeacherNames = DB.StudentInCourse
        //      .Join(
        //          DB.coursim,
        //          studentincourse => studentincourse.IdCourse,
        //          coursim => coursim.Idcourse,
        //          (studentincourse, coursim) => new
        //          {
        //              Studentincourse = studentincourse,
        //              idcourse = coursim.Idcourse,
        //              ClassStart = coursim.classStart,
        //              ClassEnd = coursim.classEnd,
        //              Date = coursim.Date,
        //              Units = coursim.units,
        //              Type = coursim.Type,
        //              Statut = coursim.Statut,
        //              IdSubject = coursim.idSubject,
        //          })
        //      .Join(
        //          DB.student,
        //          studentincourse => studentincourse.Studentincourse.idStudent,
        //          student => student.Idstudent,
        //          (studentincourse, student) => new
        //          {
        //              Studentincourse = studentincourse.Studentincourse,
        //              ClassStart = studentincourse.ClassStart,
        //              Date = studentincourse.Date,
        //              ClassEnd = studentincourse.ClassEnd,
        //              Units = studentincourse.Units,
        //              Type = studentincourse.Type,
        //              Statut = studentincourse.Statut,
        //              StudentName = student.name,
        //              StudentLastName = student.lastName,
        //              NameClass = student.NameClass,
        //          })
        //      .ToList()
        //    .Select(result => new StudentInCourse
        //    {
        //        IdStudentInCourse = result.Studentincourse.IdStudentInCourse,
        //        Dateend = result.Studentincourse.Dateend,
        //        DateStart = result.Studentincourse.DateStart,
        //        IdCourse = result.Studentincourse.IdCourse,
        //        StudentName = result.StudentName,
        //        StudentLastName = result.StudentLastName,
        //        NameClass = result.NameClass,
        //        Units = result.Units,
        //        ClassStart = result.ClassStart,
        //        ClassEnd = result.ClassEnd,
        //        Date = result.Date,
        //        Type = result.Type,
        //        Statut = result.Statut,



        //    })
        //    .ToList();

        //    return coursesWithTeacherNames;
        //}
        public bool Add(StudentInCourse s)
        {
            try
            {
                DB.StudentInCourse.Add(s);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Update(StudentInCourse s)
        {
            try
            {
                DB.Entry(s);
                DB.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Remove(StudentInCourse s)
        {
            try
            {
                DB.StudentInCourse.Remove(s);
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
