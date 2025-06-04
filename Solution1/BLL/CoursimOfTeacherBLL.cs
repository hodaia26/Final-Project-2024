using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BLL
{
    public class CoursimOfTeacherBLL
    {
        CoursimOfTeacherDAL CoursimOfTeacherDAL = new CoursimOfTeacherDAL();

        public List<CoursimOfTeacherDTO> GetCoursimOfTeacher()
        {
            return Converter.CoursimOfTeacherConverter.ConverttoDTOall(CoursimOfTeacherDAL.GetCoursimOfTeacher());
        }
        public bool AddCoursimOfTeacher(CoursimOfTeacherDTO CoursimOfTeacherDTO)
        {
            return CoursimOfTeacherDAL.Add(Converter.CoursimOfTeacherConverter.ConvertTODTO(CoursimOfTeacherDTO));
        }
        public List<CoursimOfTeacherDTO> getCoursimOfTeacherbyid()
        {
            return Converter.CoursimOfTeacherConverter.ConverttoDTOall(CoursimOfTeacherDAL.GetCoursimOfTeacher());
        }
    }
}
