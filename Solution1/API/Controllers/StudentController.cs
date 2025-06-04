using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using BLL;
using DAL;
using DTO;

namespace API2.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*", SupportsCredentials = true)]
    [Route("GetAllAuthor")]

    public class StudentController : ApiController
    {
        StudentBLL StudentBLL = new StudentBLL();
        FeedbackBLL feedbackBLL = new FeedbackBLL();
        VilleBLL VilleBLL= new VilleBLL();
        DomaineBLL MatiereBLL = new DomaineBLL();
        // GET: api/Student

        [Route("api/student/GetStudents"), HttpGet]
        public List<StudentDTO> GetStudents()
        {
            return StudentBLL.GetStudents();
        }


        [Route("api/student/Login"), HttpPost]
        public StudentDTO LoginStudent([FromBody]StudentDTO request)
        {
            return StudentBLL.Login(request.email, request.Pass);
        }

  



      

        // POST : Modifie le Student Account

        [Route("api/student/ModifyStudent"), HttpPost]
        public bool ModifyStudent([FromBody] StudentDTO st)
        {
            return StudentBLL.UpdateStudent(st);
        }

        // DELETE: Student

        [Route("api/student/DeleteStudent"), HttpPost]
        public bool Delete([FromBody] StudentDTO st)
        {
            return StudentBLL.Remove(st);
        }


        // POST : signIn Student

        [Route("api/student/Add"), HttpPost]
        public bool Add([FromBody] StudentDTO s)
        {
            return StudentBLL.Add(s);
        }
        [Route("api/student/GetClasse"), HttpGet]
        public List<ClasseDTO> GetClasse()
        {
            return StudentBLL.GetClasse();
        }

        // GET: List des Feedback

        [Route("api/student/GetFeedback"), HttpGet]
        public List<feedbackDTO> GetFeedback()
        {
            return feedbackBLL.GetFeedback();
        }

        // POST : Add feedback

        [Route("api/student/AddFeedback"), HttpPost]
        public bool AddFeedback([FromBody] feedbackDTO fdb)
        {
            return feedbackBLL.AddFeedback(fdb);
        }


       // [Route("api/teacher/GetVille"), HttpGet]
       // public List<VilleDTO> GetVille()
       // {
       //     return VilleBLL.GetVille();
      //  }

        [Route("api/teacher/GetDomain"), HttpGet]
        public List<DomaineDTO> GetDomain()
        {
            return MatiereBLL.GetDomain();
        }
    }
}