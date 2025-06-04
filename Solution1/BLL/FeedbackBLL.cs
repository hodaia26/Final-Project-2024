using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class FeedbackBLL
    {
        FeedbackDAL FeedbackDAL = new FeedbackDAL();

        public bool Update(feedbackDTO feedbackDTO)
        {
            return FeedbackDAL.Update(Converter.FeedbackConverter.ConvertTODTO(feedbackDTO));
        }
        public bool Remove(feedbackDTO feedbackDTO)
        {
            return FeedbackDAL.Remove(Converter.FeedbackConverter.ConvertTODTO(feedbackDTO));
        }
        public List<feedbackDTO> GetFeedback()
        {
            return Converter.FeedbackConverter.ConverttoDTOall(FeedbackDAL.GetFeedback());
        }

        public bool AddFeedback(feedbackDTO feedbackDTO)
        {
            return FeedbackDAL.Add(Converter.FeedbackConverter.ConvertTODTO(feedbackDTO));
        }
    }
}
