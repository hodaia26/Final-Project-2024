using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class TimesOfCourseBLL
    {
        TimeOfCourseDAL timeOfCourseDAL= new TimeOfCourseDAL();
        public bool AddTimeOfCoursim(TimeOfCourseDTO timeOfCourseDTO)
        {
            return timeOfCourseDAL.Add(Converter.TimesOfCourseConverter.ConvertTODTO(timeOfCourseDTO));
        }

        public List<TimeOfCourseDTO> GettimeOfCourse()
        {
            return Converter.TimesOfCourseConverter.ConverttoDTOall(timeOfCourseDAL.GetTimesOfCourses());
        }

    

        public bool Update(TimeOfCourseDTO timeOfCourseDTO)
        {
            return timeOfCourseDAL.Update(Converter.TimesOfCourseConverter.ConvertTODTO(timeOfCourseDTO));
        }
        public bool Remove(TimeOfCourseDTO timeOfCourseDTO)
        {
            return timeOfCourseDAL.Remove(Converter.TimesOfCourseConverter.ConvertTODTO(timeOfCourseDTO));
        }
    }
}
