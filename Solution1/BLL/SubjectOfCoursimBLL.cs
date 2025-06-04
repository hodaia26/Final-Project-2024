using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class SubjectOfCoursimBLL
    {
        SubjectOfCoursimDAL subjectOfCoursimDAL = new SubjectOfCoursimDAL();
        public bool Add(SubjectOfCoursimDTO subjectOfCoursimDTO)
        {
            return subjectOfCoursimDAL.Add(Converter.SubjectOfCoursimConverter.ConvertTODTO(subjectOfCoursimDTO));
        }


        public bool Update(SubjectOfCoursimDTO subjectOfCoursimDTO)
        {
            return subjectOfCoursimDAL.Update(Converter.SubjectOfCoursimConverter.ConvertTODTO(subjectOfCoursimDTO));

        }
        public bool Remove(SubjectOfCoursimDTO subjectOfCoursimDTO)
        {
            return subjectOfCoursimDAL.Remove(Converter.SubjectOfCoursimConverter.ConvertTODTO(subjectOfCoursimDTO));

        }

        public List<SubjectOfCoursimDTO> GetSubject()
        {
            return Converter.SubjectOfCoursimConverter.ConverttoDTOall(subjectOfCoursimDAL.GetSubject());
        }

    }
}
