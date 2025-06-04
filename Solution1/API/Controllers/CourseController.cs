using BLL;
using DAL;
using DTO;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace API2.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*", SupportsCredentials = true)]
    [Route("GetAllAuthor")]

    public class CourseController : ApiController
    {
        CoursimBLL coursimBLL = new CoursimBLL();
        StudentinCourseBLL StudentinCourseBLL = new StudentinCourseBLL(); 
        SubjectOfCoursimBLL SubjectOfCoursimBLL = new SubjectOfCoursimBLL();
        MessageBLL MessageBLL = new MessageBLL();
        NotificationBLL NotificationBLL=new NotificationBLL()
;        // GET: Coursesby id for student
        //historique et futur cours

        [Route("api/course/getCoursimbyid"), HttpGet]

        public List<CoursimDTO> getCoursesbyid()
        {
            return coursimBLL.getCoursesbyid();
        }

        [Route("api/course/GetSIC"), HttpGet]

        public List<StudentInCourseDTO> GetSIC()
        {

            return StudentinCourseBLL.GetSIC();
        }

        // GET: Coursesby id for teacher

        [Route("api/course/GetCoursim"), HttpGet]
        public List<CoursimDTO> GetCoursim()
        {
            return coursimBLL.GetCoursim();

        }
        [Route("api/course/GetSICbyid"), HttpGet]

        //join de coursimm  et student

        public List<StudentInCourseDTO> getCoursesStudentbyid()
        {
            return StudentinCourseBLL.getCoursesStudentbyid();
        }


        // POST: Student Modifie le Cours

        [Route("api/course/StudentmodifyCourse"), HttpPost]
        public bool ModifyCoursim([FromBody] CoursimDTO c)
        {
            return coursimBLL.Update(c);
        }
        // POST: Student supprime le Cours

        [Route("api/course/deletecourse"), HttpPost]
        public bool Delete([FromBody] CoursimDTO e)
        {
            return coursimBLL.Remove(e);
        }



        // POST: Courses
        [Route("api/course/AddCourse"), HttpGet]
        public void add([FromBody] string value)
        {
        }

        public void Put(int id, [FromBody] string value)
        {
        }
        public void Delete(int id)
        {
        }

        // POST: Courses dans Coursim
        [Route("api/course/AddCoursim"), HttpPost]
        public bool AddCoursim([FromBody] CoursimDTO coursim)
        {
            return coursimBLL.Add(coursim);
        }

        // POST: Courses dans StudentInCourse
        [Route("api/course/AddSIC"), HttpPost]
        public bool AddSIC([FromBody] StudentInCourseDTO sic)
        {
            return StudentinCourseBLL.Add(sic);
        }

        // GET: List des sujets des cours

        [Route("api/course/GetSubject"), HttpGet]

        public List<SubjectOfCoursimDTO> GetSubject()
        {
            return SubjectOfCoursimBLL.GetSubject();
        }
        // POST: add message
        [Route("api/course/AddMessage"), HttpPost]
        public bool AddMessage([FromBody] MessageDTO m)
        {
            return MessageBLL.Add(m);
        }

        // GET: List des messages

        [Route("api/course/GetMessage"), HttpGet]

        public List<MessageDTO> GetMessage()
        {
            return MessageBLL.GetMessage();
        }

        // POST: add notification
        [Route("api/course/AddNotification"), HttpPost]
        public bool AddNotification([FromBody] NotificationDTO n)
        {
            return NotificationBLL.Add(n);
        }

        // GET: List des notifications

        [Route("api/course/GetNotification"), HttpGet]

        public List<NotificationDTO> GetNotification()
        {
            return NotificationBLL.GetNotification();
        }

        // POST: add notification
        // POST: add notification
        [Route("api/course/ModifyNotification"), HttpPost]
        public bool ModifyNotification([FromBody] List<NotificationDTO> n)
        {
            bool allUpdatesSuccessful = true;

            // Itérez sur la liste et appelez la méthode Update pour chaque élément
            foreach (var noti in n)
            {
                // Appel de la méthode Update de la couche logique avec un seul objet NotificationDTO
                if (!NotificationBLL.Update(noti))
                {
                    // Si la mise à jour échoue pour l'un des éléments, mettez à jour la variable
                    // et sortez de la boucle (vous pouvez également choisir de continuer malgré l'échec)
                    allUpdatesSuccessful = false;
                    break;
                }
            }

            // Renvoyez true seulement si toutes les mises à jour réussissent
            return allUpdatesSuccessful;
        }


      
    }
}






