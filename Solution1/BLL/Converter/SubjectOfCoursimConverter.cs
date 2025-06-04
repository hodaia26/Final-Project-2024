using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Converter
{
    public class SubjectOfCoursimConverter
    {
        public static SubjectOfCoursimDTO ConvertTdODTO(SubjectOfCoursim c)
        {
            return new SubjectOfCoursimDTO()
            {
          domaineName = c.domaineName,
          idSubject = c.idSubject,
          name=c.name

            };

        }

        public static List<SubjectOfCoursimDTO> ConverttoDTOall(List<SubjectOfCoursim> q)
        {
            return q.Select(a => ConvertTdODTO(a)).ToList();
        }

        public static SubjectOfCoursim ConvertTODTO(SubjectOfCoursimDTO subjectOfCoursimDTO)
        {
            return new SubjectOfCoursim()
            {
                domaineName = subjectOfCoursimDTO.domaineName,
                idSubject = subjectOfCoursimDTO.idSubject,
                name = subjectOfCoursimDTO.name


            };

        }
        public static List<SubjectOfCoursim> ConverttoDTOall(List<SubjectOfCoursimDTO> q)
        {
            return (q.Select(a => ConvertTODTO(a)).ToList());
        }
    }
}
