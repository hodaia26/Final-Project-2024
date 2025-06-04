import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../Models/Student';
import { Observable } from 'rxjs';
import { Teacher } from '../Models/Teacher';
import { StudentInCourse } from '../Models/StudentInCourse';
import { Coursim } from '../Models/Coursim';
import { Classe } from '../Models/Classe';
import { Feedback } from '../Models/Feedback';
import { SubjectOfCoursim } from '../Models/SubjectOfCoursim';
import { Genre } from '../Models/Genre';
import { Ville } from '../Models/Ville';
import { Domaine } from '../Models/Domaine';
import { Message } from '../Models/Message';
import { Notification } from '../Models/Notification';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'https://localhost:44367/api/student/Login'; 
  private apiUrl2 = 'https://localhost:44367/api/teacher/GetTeachersByClass';
  private apiUrl3 = 'https://localhost:44367/api/course/GetSIC';
  private apiUrl4 = 'https://localhost:44367/api/course/getCoursimbyid';
  private apiUrl5 = 'https://localhost:44367/api/student/Add';
  private apiUrl6 = 'https://localhost:44367/api/course/StudentmodifyCourse';
  private apiUrl7 = 'https://localhost:44367/api/course/deletecourse';
  private apiUrl8 = 'https://localhost:44367/api/student/ModifyStudent';
  private apiUrl9 = 'https://localhost:44367/api/student/GetClasse';
  private apiUrl10 = 'https://localhost:44367/api/course/AddCoursim';
  private apiUrl11 = 'https://localhost:44367/api/course/AddSIC';
  private apiUrl12 = 'https://localhost:44367/api/student/DeleteStudent';
  private apiUrl13 = 'https://localhost:44367/api/student/GetFeedback';
  private apiUrl14 = 'https://localhost:44367/api/student/AddFeedback';
  private apiUrl15 = 'https://localhost:44367/api/course/GetSubject';
  private apiUrl16 = 'https://localhost:44367/api/teacher/GetGenre';
  private apiUrl17 = 'https://localhost:44367/api/teacher/GetVilles';
  private apiUrl18 = 'https://localhost:44367/api/teacher/GetDomain';
  private apiUrl19 = 'https://localhost:44367/api/course/GetMessage';
  private apiUrl20 = 'https://localhost:44367/api/course/AddMessage';

  private apiUrl21 = 'https://localhost:44367/api/teacher/SearchTeacher';
  private apiUrl22 = 'https://localhost:44367/api/course/GetNotification';
  private apiUrl23 = 'https://localhost:44367/api/course/AddNotification';
private apiUrl24 = 'https://localhost:44367/api/teacher/GetTeachers';
private apiUrl25 = 'https://localhost:44367/api/course/ModifyNotification';


  constructor(private http: HttpClient) {}

  LoginStudent(email: string, Pass: string): Observable<Student> {
    const requestBody = {
      email: email,
      Pass: Pass
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Student>(this.apiUrl, requestBody, { headers: headers, withCredentials: true });
  
  }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.apiUrl24);
  }
  GetTeachersByClass( c:string): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.apiUrl2+`?clas=${c}`);
  }

  SearchTeachers(c:string,v:string,m:string,g:string): Observable<Teacher> {

    return this.http.get<Teacher>(this.apiUrl21+`?nc=${c}&v=${v}&m=${m}&g=${g}`);
  }


  
  getStudentincourses(): Observable<StudentInCourse[]> {
    return this.http.get<StudentInCourse[]>(this.apiUrl3);
  }

  getCourses(): Observable<Coursim[]> {
    return this.http.get<Coursim[]>(this.apiUrl4);
  }
  
  SigninStudent(newUser: Student): Observable<Student> {
    // Créez le corps de la requête avec les données de l'utilisateur
    const requestBody = newUser;

    // Définissez les en-têtes de la requête
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Envoyez la requête POST au serveur
    return this.http.post<Student>(this.apiUrl5, requestBody, { headers: headers, withCredentials: true });
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
  DeleteCourse(a : Coursim): Observable<Coursim> {
   const deletcourse=a;
   const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  return this.http.post<Coursim>(this.apiUrl7,deletcourse, { headers: headers, withCredentials: true })
  }  

  ModifyStudent(studentFormData: Student): Observable<Student> {
      
      // Créez le corps de la requête avec les données de l'utilisateur
      const modifyacount = studentFormData;
      console.log(modifyacount);
      // Définissez les en-têtes de la requête
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.http.post<Student>(this.apiUrl8, modifyacount, { headers: headers, withCredentials: true });
    }
//  return  this.http.get<student>(`https://localhost:44367/api/student/getstudent`)}



DeleteStudent(studentDelete: Student): Observable<Student> {
  
  // Créez le corps de la requête avec les données de l'utilisateur
  const DeleteStudent = studentDelete;

  // Définissez les en-têtes de la requête
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  return this.http.post<Student>(this.apiUrl12, DeleteStudent, { headers: headers, withCredentials: true });
}

getClasse(): Observable<Classe[]> {
  return this.http.get<Classe[]>(this.apiUrl9);
}



CreateCoursim(newCoursim: Coursim): Observable<Coursim> {
  // Créez le corps de la requête avec les données de l'utilisateur
  const requestBody = newCoursim;
  
  // Définissez les en-têtes de la requête
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  // Envoyez la requête POST au serveur
  return this.http.post<Coursim>(this.apiUrl10, requestBody, { headers: headers, withCredentials: true });
}

CreateSIC(newSIC: StudentInCourse): Observable<StudentInCourse> {
  // Créez le corps de la requête avec les données de l'utilisateur
  const requestBody = newSIC;
  console.log(requestBody);
  // Définissez les en-têtes de la requête
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  // Envoyez la requête POST au serveur
  return this.http.post<StudentInCourse>(this.apiUrl11, requestBody, { headers: headers, withCredentials: true });


}  


getFeedback(): Observable<Feedback[]> {
  return this.http.get<Feedback[]>(this.apiUrl13);
}

CreateFeedback(newFeedback: Feedback): Observable<Feedback> {
  // Créez le corps de la requête avec les données de l'utilisateur
  const requestBody = newFeedback;
  
  // Définissez les en-têtes de la requête
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  // Envoyez la requête POST au serveur
  return this.http.post<Feedback>(this.apiUrl14, requestBody, { headers: headers, withCredentials: true });
}


GetSubject(): Observable<SubjectOfCoursim[]> //subjectofcoursim=>model
 {
   return this.http.get<SubjectOfCoursim[]>(this.apiUrl15);
 }


 GetGenre(): Observable<Genre[]> {
  return this.http.get<Genre[]>(this.apiUrl16);
}


GetVille(): Observable<Ville[]> {
  return this.http.get<Ville[]>(this.apiUrl17);
}

GetDomain(): Observable<Domaine[]> {
  return this.http.get<Domaine[]>(this.apiUrl18);
}




GetMessage(): Observable<Message[]> {
  return this.http.get<Message[]>(this.apiUrl19);
}


AddMessage(newmsg: Message): Observable<Message> {
  // Créez le corps de la requête avec les données de l'utilisateur
  const requestBody = newmsg;
  console.log(requestBody);
  // Définissez les en-têtes de la requête
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  // Envoyez la requête POST au serveur
  return this.http.post<Message>(this.apiUrl20, requestBody, { headers: headers, withCredentials: true });
}



GetNotification(): Observable<Notification[]> {
  return this.http.get<Notification[]>(this.apiUrl22);
}


AddNotification(newnoti: Notification): Observable<Notification> {
  // Créez le corps de la requête avec les données de l'utilisateur
  const requestBody = newnoti;
  
  // Définissez les en-têtes de la requête
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  // Envoyez la requête POST au serveur
  return this.http.post<Notification>(this.apiUrl23, requestBody, { headers: headers, withCredentials: true });
}


Modifynotification(noti: Notification[]): Observable<Notification[]> {
   // Créez le corps de la requête avec les données de l'utilisateur
   const requestBody = noti;
   
   // Définissez les en-têtes de la requête
   const headers = new HttpHeaders({
     'Content-Type': 'application/json'
   });
console.log(requestBody)
   // Envoyez la requête POST au serveur
   return this.http.post<Notification[]>(this.apiUrl25, requestBody, { headers: headers, withCredentials: true });
 }
}