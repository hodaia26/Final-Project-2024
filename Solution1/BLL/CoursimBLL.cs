using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class CoursimBLL
    {

        CoursimDAL coursimDAL = new CoursimDAL();

        public List<CoursimDTO> getCoursesbyid()
        {
            return Converter.Coursimconverter.ConverttoDTOall(coursimDAL.GetCoursim());
        }

        public List<CoursimDTO> GetCoursim()
        {
            return Converter.Coursimconverter.ConverttoDTOall(coursimDAL.GetCoursim());
        }

        public bool Add(CoursimDTO coursimDTO)
        {
            return coursimDAL.Add(Converter.Coursimconverter.ConvertTODTO(coursimDTO));
        }

        public bool Update(CoursimDTO coursimDTO)
        {
            return coursimDAL.Update(Converter.Coursimconverter.ConvertTODTO(coursimDTO));
        }
        public bool Remove(CoursimDTO coursimDTO)
        {
            return coursimDAL.Remove(Converter.Coursimconverter.ConvertTODTO(coursimDTO));
        }
        public List<CourseToStudentDetail> getCoursebyid(int id)
        {
            List<CourseToStudentDetail>sl=new List<CourseToStudentDetail>();
            //למלא בנתונים



            return sl;

        }

    
        }
}
