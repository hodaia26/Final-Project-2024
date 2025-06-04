using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Converter
{
    public class FeedbackConverter
    {
        public static feedbackDTO ConvertTdODTO(Feedback c)
        {
            return new feedbackDTO()
            {
                IdfeedBack = c.IdfeedBack,  
                idStudent=c.idStudent,
                idTeacher=c.idTeacher,
                point = c.point ,
                remark = c.remark  
                
                
            };

        }

        public static List<feedbackDTO> ConverttoDTOall(List<Feedback> q)
        {
            return q.Select(a => ConvertTdODTO(a)).ToList();
        }

        public static Feedback ConvertTODTO(feedbackDTO feedbackDTO)
        {
            return new Feedback()
            {
                IdfeedBack = feedbackDTO.IdfeedBack,
                idStudent = feedbackDTO.idStudent,
                idTeacher = feedbackDTO.idTeacher,
                point = feedbackDTO.point,
                remark = feedbackDTO.remark


            };

        }
        public static List<Feedback> ConverttoDTOall(List<feedbackDTO> q)
        {
            return (q.Select(a => ConvertTODTO(a)).ToList());
        }
    }
}
