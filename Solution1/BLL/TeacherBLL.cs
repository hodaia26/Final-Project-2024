using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class TeacherBLL
    {
        TeacherDAL teacherDAL = new TeacherDAL();


        public List<TeacherDTO> SearchTeacher(string nc, string v, string m, string g)
        {
            List<teacher> tl = teacherDAL.GetTeachers().FindAll(a => a.Ville.Trim() == v.Trim() && a.Genre.Trim() == g.Trim());
            List<TeacherDTO> tld = new List<TeacherDTO>();
            ClassesDAL classes = new ClassesDAL();
            int classid = classes.GetIdByName(nc);

            List<string> ls = new List<string>();
            List<CoursimOfTeacher> cl = new List<CoursimOfTeacher>();

            bool f = false;

            foreach (var item in tl)
            {
                cl = new CoursimOfTeacherDAL().GetCoursimOfTeacher().FindAll(a => a.IdTeacher == item.Idteacher);

                foreach (var c in item.CoursimOfTeacher)
                {
                    ls.Add(c.Matiere.Trim());
                    if (classes.GetIdByName(c.NameClassStart) <= classid && classes.GetIdByName(c.NameClassEnd) >= classid && c.Matiere.Trim() == m.Trim())
                    {
                        f = true;
                    }
                }

                if (f)
                {
                    tld.Add(Converter.TeacherConverter.ConvertTdODTO(item));
                    ls = ls.Distinct().ToList();
                    tld.Last().Matiere = string.Join(",", ls);
                }

                ls = new List<string>();
                f = false;
            }

            return tld;
        }
//      //  public List<TeacherDTO> SearchTeacher(string nc, string v, string m, string g)
//        {
//            List<teacher> tl = teacherDAL.GetTeachers().FindAll(a => a.Ville.Trim() == v.Trim()
//            && a.Genre.Trim() == g.Trim());
//            List<TeacherDTO> tld = new List<TeacherDTO>();
//            ClassesDAL classes = new ClassesDAL();
//            int classid = classes.GetIdByName(nc);
//            List<string> ls = new List<string>();
//            int i = 0;
//            List<CoursimOfTeacher> cl = new List<CoursimOfTeacher>();
//            foreach (var item in tl)
//            {
//                cl = new CoursimOfTeacherDAL().GetCoursimOfTeacher().FindAll(a => a.IdTeacher == item.Idteacher);
//                bool f = false;
//                foreach (var c in item.CoursimOfTeacher)
//                {
//                    ls.Add(c.Matiere.Trim());
//                    if (classes.GetIdByName(c.NameClassStart) <= classid && classes.GetIdByName(c.NameClassEnd) >= classid &&c.Matiere.Trim()==m.Trim())
//                    {
//                        f = true;
//                    }

//                }
//                if (f)
//                {
//                    tld.Add(Converter.TeacherConverter.ConvertTdODTO(item));
//                     ls = ls.Distinct().ToList();
//                    tld[i].Matiere = "";
//                    foreach (var x in ls)
//                        tld[i].Matiere+= x+",";
//                }
//                i++;
//                ls = new List<string>();
//                f = false;
//            }



//           return tld;

//        }
////        public List<TeacherDTO> SearchTeacher(string v, string m, string g)
//{
//            List<teacher> tl = teacherDAL.GetTeachers().FindAll(
//                a => a.Ville.Trim() == v.Trim()
//             && a.Genre.Trim() == g.Trim()
//             && a.Matiere.Trim() == m.Trim()
//             && a.coursim.Count() > 0
//             );

//            List<TeacherDTO> tld = new List<TeacherDTO>();


//            foreach (var item in tl)
//            {

//                tld.Add(Converter.TeacherConverter.ConvertTdODTO(item));

//            }


//            return tld;

//        }
        public List<TeacherDTO> GetTeachersByClass(string clas)
        {
            ClassesDAL classesDAL = new ClassesDAL();
            int ci = classesDAL.GetIdByName(clas.Trim());
            return Converter.TeacherConverter.ConverttoDTOall(teacherDAL.GetTeachers().
                FindAll(a=>a.CoursimOfTeacher.Where(c=> classesDAL.GetIdByName(c.NameClassStart.Trim())<=ci&&
               classesDAL.GetIdByName(c.NameClassEnd)>=ci ).Count()>0));
        }
        public List<TeacherDTO> GetTeachers()
        {
            return Converter.TeacherConverter.ConverttoDTOall(teacherDAL.GetTeachers());
        }
        
        public bool Add(TeacherDTO teacherDTO)
        {
            return teacherDAL.Add(Converter.TeacherConverter.ConvertTODTO(teacherDTO));
        }

        public TeacherDTO Login(string email, string pass)
        {


            var foundTeacher = teacherDAL.GetTeachers().Find(a => a.email.Trim() == email.Trim() && a.pass.Trim() == pass.Trim());

            if (foundTeacher == null)
            {
                
                return null;
            }

            return Converter.TeacherConverter.ConvertTdODTO(foundTeacher);
          //  return Converter.TeacherConverter.ConvertTdODTO(teacherDAL.GetTeachers().Find(a => a.email.Trim() == email.Trim() && a.pass.Trim() == pass.Trim()));
        }

        public bool UpdateTeacher(TeacherDTO teacherDTO)
        {
            return teacherDAL.Update(Converter.TeacherConverter.ConvertTODTO(teacherDTO));
        }

        public bool Remove(TeacherDTO teacherDTO)
        {
            return teacherDAL.Remove(Converter.TeacherConverter.ConvertTODTO(teacherDTO));
        }
    }
}

