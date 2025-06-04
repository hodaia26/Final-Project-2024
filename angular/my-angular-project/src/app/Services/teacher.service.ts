import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../Models/Teacher';
import { Observable } from 'rxjs';
import { Student } from '../Models/Student';
import { Coursim } from '../Models/Coursim';
import { StudentInCourse } from '../Models/StudentInCourse';
import { TypeCours } from '../Models/TypeCours';
import { Genre } from '../Models/Genre';
import { Ville } from '../Models/Ville';

import { TimeOfCourse } from '../Models/TimeOfCourse';
interface CustomCalendarEvent extends CalendarEvent {
  id: number;
}
import { map } from 'rxjs/operators';
import { CalendarEvent } from 'angular-calendar';
import { CoursimOfTeacher } from '../Models/CoursimOfTeacher';
import { Disponibilite } from '../Models/Disponibilite';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private apiUrl = 'https://localhost:44367/api/teacher/Login'; 
  private apiUrl3 = 'https://localhost:44367/api/course/GetSICbyid';
  private apiUrl4 = 'https://localhost:44367/api/course/getCoursim';
  private apiUrl5 = 'https://localhost:44367/api/student/GetStudents';
  private apiUrl6 = 'https://localhost:44367/api/course/StudentmodifyCourse';
  private apiUrl7 = 'https://localhost:44367/api/course/DeleteCourse';
  private apiUrl8 = 'https://localhost:44367/api/teacher/ModifyTeacher';
  private apiUrl9 = 'https://localhost:44367/api/teacher/Add';
  private apiUrl12 = 'https://localhost:44367/api/teacher/DeleteTeacher';
  private apiUrl20 = 'https://localhost:44367/api/teacher/GetVilles';
  private apiUrl21 = 'https://localhost:44367/api/teacher/GetGenres';
  private apiUrl22 = 'https://localhost:44367/api/teacher/GetTypeCours';
  private apiUrl30 = 'https://localhost:44367/api/teacher/TimeOfCoursim';
  private apiUrl31 = 'https://localhost:44367/api/teacher/AddTimeOfCoursim';
  private apiUrl32 = 'https://localhost:44367/api/teacher/CoursimOfTeacher';
  private apiUrl33 = 'https://localhost:44367/api/teacher/AddCoursimOfTeacher';
  private apiUrl34 = 'https://localhost:44367/api/teacher/Disponibilite';
  private apiUrl35 = 'https://localhost:44367/api/teacher/AddDisponibilite';
  private apiUrl36 = 'https://localhost:44367/api/teacher/DeleteDisponibilite';
  private apiUrl37 = 'https://localhost:44367/api/teacher/DeleteTimeOfCoursim';
  private apiUrl38 = 'https://localhost:44367/api/teacher/ModifyTimeOfCoursim';
  private apiUrl39= 'https://localhost:44367/api/teacher/getCoursimOfTeacherbyid';

  constructor(private http:HttpClient) { }


  LoginTeacher(email: string, pass: string): Observable<Teacher> {
    const requestBody = {
      email: email,
      pass: pass
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Teacher>(this.apiUrl, requestBody, { headers: headers, withCredentials: true });
  }

  getStudentincourses(): Observable<StudentInCourse[]> {
    return this.http.get<StudentInCourse[]>(this.apiUrl3);
  }
  
  getCourses(): Observable<Coursim[]> {
    return this.http.get<Coursim[]>(this.apiUrl4);
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl5);
  }
 
  ModifyCourse(studentmodifyCourse: Coursim): Observable<Coursim> {
    
    // Créez le corps de la requête avec les données de l'utilisateur
    const modifycourse = studentmodifyCourse;

    // Définissez les en-têtes de la requête
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Coursim>(this.apiUrl6, modifycourse, { headers: headers, withCredentials: true });
  }
  

 DeleteCourse(studentmodifyCourse: Coursim): Observable<Coursim> {
    
    // Créez le corps de la requête avec les données de l'utilisateur
    const deletecourse = studentmodifyCourse;

    // Définissez les en-têtes de la requête
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Coursim>(this.apiUrl7, deletecourse, { headers: headers, withCredentials: true });
  }

  ModifyTeacher(teacherFormData: Teacher): Observable<Teacher> {
      
    // Créez le corps de la requête avec les données de l'utilisateur
    const modifyacount = teacherFormData;
    console.log(modifyacount);
    // Définissez les en-têtes de la requête
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Teacher>(this.apiUrl8, modifyacount, { headers: headers, withCredentials: true });
  }
  SigninTeacher(newUser: Teacher): Observable<Teacher> {
    // Créez le corps de la requête avec les données de l'utilisateur
    const requestBody = newUser;

    // Définissez les en-têtes de la requête
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Envoyez la requête POST au serveur
    return this.http.post<Teacher>(this.apiUrl9, requestBody, { headers: headers, withCredentials: true });
  }


  DeleteTeacher(teacherDelete: Teacher): Observable<Teacher> {
    
    // Créez le corps de la requête avec les données de l'utilisateur
    const TeacherDelete = teacherDelete;

    // Définissez les en-têtes de la requête
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Teacher>(this.apiUrl12, TeacherDelete, { headers: headers, withCredentials: true });
  }


  GetVilles(): Observable<Ville[]> {
    return this.http.get<Ville[]>(this.apiUrl20);
  }
  
  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.apiUrl21);
  }

  getTypescours(): Observable<TypeCours[]> {
    return this.http.get<TypeCours[]>(this.apiUrl22);
  }

  getTimeOfCourse(): Observable<TimeOfCourse[]> {
    return this.http.get<TimeOfCourse[]>(this.apiUrl30);
  }
  getEventData(): Observable<CustomCalendarEvent[]> {
    return this.http.get<any[]>(this.apiUrl30).pipe(
      map((datas) => {
        console.log(datas);
        return datas.map((data) => 
        ({
          start: new Date(data.DateStart),
          end: new Date(data.dateend),
          id: data.idcourse,
          title: 'Reserved',
          color: { primary: 'DarkRed', secondary: 'DarkRed' },
        }));
      }));
  }




  CreateTime(newTime: TimeOfCourse): Observable<TimeOfCourse> {
    // Créez le corps de la requête avec les données de l'utilisateur
    const requestBody = newTime;
    
    // Définissez les en-têtes de la requête
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Envoyez la requête POST au serveur
    return this.http.post<TimeOfCourse>(this.apiUrl31, requestBody, { headers: headers, withCredentials: true });
  }



  getCoursimOfTeacher(): Observable<CoursimOfTeacher[]> {
    return this.http.get<CoursimOfTeacher[]>(this.apiUrl32);
  }
  addnewCoursimOfTeacher(cours: CoursimOfTeacher): Observable<CoursimOfTeacher> {
    // Créez le corps de la requête avec les données de l'utilisateur
    const requestBody = cours;
    
    // Définissez les en-têtes de la requête
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Envoyez la requête POST au serveur
    return this.http.post<CoursimOfTeacher>(this.apiUrl33, requestBody, { headers: headers, withCredentials: true });
  }
  

  

  getDispo(): Observable<Disponibilite[]> {
    return this.http.get<Disponibilite[]>(this.apiUrl34);
  }

getDisponibilite(): Observable<CustomCalendarEvent[]> {
  return this.http.get<any[]>(this.apiUrl34).pipe(
    map((datas) => {
      return datas.map((data) => ({
        studentSelectable: true, // Indique que cet événement est sélectionnable
        start: new Date(data.DateStart),
        end: new Date(data.dateend),
        id: data.IdTeacher,
        title: 'Reserver',
        color: { primary: 'lightgreen', secondary: 'lightgreen' },
      }));
    })
  );
}

getcoursimofteacherbyid(): Observable<CoursimOfTeacher[]> {
  return this.http.get<CoursimOfTeacher[]>(this.apiUrl39);
}



DeleteDisponinbilite(DispoDelete: Disponibilite): Observable<Disponibilite> {
   
   // Créez le corps de la requête avec les données de l'utilisateur
   const request = DispoDelete;
   console.log("id",request);

   // Définissez les en-têtes de la requête
   const headers = new HttpHeaders({
     'Content-Type': 'application/json'
   });
   return this.http.post<Disponibilite>(this.apiUrl36, request, { headers: headers, withCredentials: true });
 }
 

  CreateDisponibilite(newDisponibilite: Disponibilite): Observable<Disponibilite> {



    // Créez le corps de la requête avec les données de l'utilisateur
    const requestBody = newDisponibilite;
    
    // Définissez les en-têtes de la requête
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Envoyez la requête POST au serveur
    return this.http.post<Disponibilite>(this.apiUrl35, requestBody, { headers: headers, withCredentials: true });
  }




  DeleteTimeOfCourse(oldTime: TimeOfCourse): Observable<TimeOfCourse> {
     // Créez le corps de la requête avec les données de l'utilisateur
     const requestBody = oldTime;
     
     // Définissez les en-têtes de la requête
     const headers = new HttpHeaders({
       'Content-Type': 'application/json'
     });
 
     // Envoyez la requête POST au serveur
     return this.http.post<TimeOfCourse>(this.apiUrl37, requestBody, { headers: headers, withCredentials: true });
   }   


    ModifyTime(ModifyTime: TimeOfCourse): Observable<TimeOfCourse> {
         
       // Créez le corps de la requête avec les données de l'utilisateur
       const modifyacount = ModifyTime;
       console.log(modifyacount);
       // Définissez les en-têtes de la requête
       const headers = new HttpHeaders({
         'Content-Type': 'application/json'
       });
       return this.http.post<TimeOfCourse>(this.apiUrl38, modifyacount, { headers: headers, withCredentials: true });
     }

   

}


