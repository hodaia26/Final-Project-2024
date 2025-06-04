using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Converter
{
    public class TimesOfCourseConverter
    {
        public static TimeOfCourseDTO ConvertTdODTO(TimesOfCourse c)
        {
            return new TimeOfCourseDTO()
            {
                dateend = c.dateend,
                DateStart=c.DateStart,
                idcourse = c.idcourse,
                IdTime = c.IdTime
                
            };

        }

        public static List<TimeOfCourseDTO> ConverttoDTOall(List<TimesOfCourse> q)
        {
            return q.Select(a => ConvertTdODTO(a)).ToList();
        }

        public static TimesOfCourse ConvertTODTO(TimeOfCourseDTO timeOfCourseDTO)
        {
            return new TimesOfCourse()
            {
                dateend =timeOfCourseDTO.dateend,
                DateStart = timeOfCourseDTO.DateStart,
                idcourse = timeOfCourseDTO.idcourse,
                IdTime = timeOfCourseDTO.IdTime


            };

        }
        public static List<TimesOfCourse> ConverttoDTOall(List<TimeOfCourseDTO> q)
        {
            return (q.Select(a => ConvertTODTO(a)).ToList());
        }
    }
}
