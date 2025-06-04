using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using BLL;
using DAL;
using DTO;
namespace API2.Controllers
{
    //תעשי שמירה על הדף של המודל

    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*", SupportsCredentials = true)]
    [Route("GetAllAuthor")]
    public class TeacherController : ApiController
    {
        CoursimOfTeacherBLL CoursimOfTeacherBLL = new CoursimOfTeacherBLL();

        TeacherBLL teacherBLL = new TeacherBLL();
        GenreBLL GenreBLL = new GenreBLL();
        TimesOfCourseBLL TimesOfCourseBLL = new TimesOfCourseBLL();
        DisponibiliteBLL DisponibiliteBLL = new DisponibiliteBLL();
        
        VilleBLL VilleBLL = new VilleBLL();
        // GET: Teacher

        // GET: Liste des Teachers

        [Route("api/teacher/GetTeachers"), HttpGet]
        public List<TeacherDTO> GetTeachers()
        {
            return teacherBLL.GetTeachers();
        }

        [Route("api/teacher/GetTeachersByClass"), HttpGet]
        public List<TeacherDTO> GetTeachersByClass(string clas)
        {
            return teacherBLL.GetTeachersByClass(clas);
        }

        [Route("api/teacher/GetVilles"), HttpGet]
        public List<VilleDTO> GetVilles()
        {
            return VilleBLL.GetVilles();
        }
        // POST : Login Teacher

        [Route("api/teacher/Login"), HttpPost]
        public TeacherDTO LoginTeachers([FromBody] TeacherDTO request)
        {
            return teacherBLL.Login(request.email, request.pass);
        }

        // POST : Modifie le Student Account

        [Route("api/teacher/ModifyTeacher"), HttpPost]
        public bool ModifyTeacher([FromBody] TeacherDTO th)
        {
            return teacherBLL.UpdateTeacher(th);
        }


        [Route("api/teacher/SearchTeacher"), HttpGet]

        public List<TeacherDTO> SearchTeacher(string nc,string v,  string m, string g)
        {
            return teacherBLL.SearchTeacher(nc,v,m,g);
        }

    // POST : signIn Teacher

        [Route("api/teacher/Add"), HttpPost]
        public bool Add([FromBody] TeacherDTO s)
        {
            return teacherBLL.Add(s);
        }


        // DELETE: Teacher

        [Route("api/teacher/DeleteTeacher"), HttpPost]
        public bool Delete([FromBody] TeacherDTO th)
        {
            return teacherBLL.Remove(th);
        }



        [Route("api/teacher/GetGenre"), HttpGet]
        public List<GenreDTO> GenreDTO()
        {
            return GenreBLL.GetGenre();
        }
        // GET: Liste des time of course

        [Route("api/teacher/TimeOfCoursim"), HttpGet]
        public List<TimeOfCourseDTO> GetTimeOfCoursim()
        {
            return TimesOfCourseBLL.GettimeOfCourse();
        }

        // POST : signIn Teacher

        [Route("api/teacher/AddTimeOfCoursim"), HttpPost]
        public bool AddTimeOfCoursim([FromBody] TimeOfCourseDTO t)
        {
            return TimesOfCourseBLL.AddTimeOfCoursim(t);
        }

        // GET: Liste des Cours of Teacher

        [Route("api/teacher/CoursimOfTeacher"), HttpGet]
        public List<CoursimOfTeacherDTO> CoursimOfTeacher()
        {
            return CoursimOfTeacherBLL.GetCoursimOfTeacher();
        }

        // POST : signIn Cours of Teacher

        [Route("api/teacher/AddCoursimOfTeacher"), HttpPost]
        public bool AddCoursimOfTeacher([FromBody] CoursimOfTeacherDTO t)
        {
            return CoursimOfTeacherBLL.AddCoursimOfTeacher(t);
        }


        // GET: Liste des Disponibilite

        [Route("api/teacher/Disponibilite"), HttpGet]
        public List<DisponibiliteDTO> GetDisponibilite()
        {
            return DisponibiliteBLL.GetDisponibilite();
        }

        // POST : add Disponibilite

        [Route("api/teacher/AddDisponibilite"), HttpPost]
        public bool AddDisponibilite([FromBody] DisponibiliteDTO t)
        
        {
            return DisponibiliteBLL.AddDisponibilite(t);
        }

        // DELETE: dispo

        [Route("api/teacher/DeleteDisponibilite"), HttpPost]
        public bool Delete([FromBody] DisponibiliteDTO d)
        {
            return DisponibiliteBLL.Remove(d);
        }
        [Route("api/teacher/DeleteTimeOfCoursim"), HttpPost]
        public bool Delete([FromBody] TimeOfCourseDTO d)
        {
            return TimesOfCourseBLL.Remove(d);
        }
        [Route("api/teacher/ModifyTimeOfCoursim"), HttpPost]
        public bool ModifyTimeOfCoursim([FromBody] TimeOfCourseDTO th)
        {
            return TimesOfCourseBLL.Update(th);
        }
        [Route("api/teacher/getCoursimOfTeacherbyid"), HttpGet]

        public List<CoursimOfTeacherDTO> getCoursimOfTeacherbyid()
        {
            return CoursimOfTeacherBLL.getCoursimOfTeacherbyid();
        }
    }





}



