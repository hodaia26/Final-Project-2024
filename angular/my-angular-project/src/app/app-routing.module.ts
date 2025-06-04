import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './all-components/home/home.component';
import { LoginStudentComponent } from './all-components/login/login-student/login-student.component';
import { LoginTeacherComponent } from './all-components/login/login-teacher/login-teacher.component';
import { ProfileStudentComponent } from './all-components/student/profile-student/profile-student.component';
import { SigninComponent } from './all-components/signin/signin.component';
import { TeacherDashboardComponent } from './all-components/teacher/teacher-dashboard/teacher-dashboard.component';
import { AdminDashboardComponent } from './all-components/Admin/admin-dashboard/admin-dashboard.component';
import { StudentAcountComponent } from './all-components/student/student-acount/student-acount.component';
import { StudentHistoricComponent } from './all-components/student/student-historic/student-historic.component';
import { StudentFuturCourseComponent } from './all-components/student/student-futur-course/student-futur-course.component';
import { StudentRechercheComponent } from './all-components/student/student-recherche/student-recherche.component';
import { LoginComponent } from './all-components/login/login.component';
import { TeacherHistoricComponent } from './all-components/teacher/teacher-historic/teacher-historic.component';
import { TeacherAcountComponent } from './all-components/teacher/teacher-acount/teacher-acount.component';
import { TeachersComponent } from './all-components/Admin/admin-dashboard/teachers/teachers.component';
import { StudentsComponent } from './all-components/Admin/admin-dashboard/students/students.component';
import { HistoricComponent } from './all-components/Admin/admin-dashboard/historic/historic.component';
import { FutureComponent } from './all-components/Admin/admin-dashboard/future/future.component';
import { StudentModifyCourseComponent } from './all-components/student/student-modify-course/student-modify-course.component';
import { InfoTeacherComponent } from './all-components/student/info-teacher/info-teacher.component';
import { ResultSearchComponent } from './all-components/student/result-search/result-search.component';
import { CurrentCourseComponent } from './all-components/student/current-course/current-course.component';
import { FeedbackComponent } from './all-components/student/feedback/feedback.component';
import { TeacherModifyCourseComponent } from './all-components/teacher/teacher-modify-course/teacher-modify-course.component';
import { TeacherFuturCourseComponent } from './all-components/teacher/teacher-futur-course/teacher-futur-course.component';
import { StudentMessageComponent } from './all-components/student/student-message/student-message.component';
import { MyTeachersComponent } from './all-components/student/my-teachers/my-teachers.component';
import { AideComponent } from './all-components/aide/aide.component';
import { MyStudentComponent } from './all-components/teacher/my-student/my-student.component';
import { TeacherMessageComponent } from './all-components/teacher/teacher-message/teacher-message.component';
import { CoursimOfTeacherComponent } from './all-components/teacher/coursim-of-teacher/coursim-of-teacher.component';
import { DisponibilitesComponent } from './all-components/teacher/disponibilites/disponibilites.component';
import { SigninTeacherComponent } from './all-components/signin/signin-teacher/signin-teacher.component';
import { TeacherCurrentCourseComponent } from './all-components/teacher/teacher-current-course/teacher-current-course.component';





const routes: Routes = [
  { path: 'teacher-dashboard/:id', component: TeacherDashboardComponent },
  { path: 'teacher-historic/:id', component:TeacherHistoricComponent},
  { path: 'teacher-acount/:id', component:TeacherAcountComponent},
  { path: 'teacher-modify-course/:id', component:TeacherModifyCourseComponent},

  { path: 'teacher-futur-courses/:id', component:TeacherFuturCourseComponent},

  { path: '', component: HomeComponent },
  { path: 'login-teacher', component: LoginTeacherComponent },
  { path: 'login-student', component: LoginStudentComponent },
  { path: 'login', component: LoginComponent },

  { path: 'signin', component: SigninComponent },
  { path: 'current-course/:id', component: CurrentCourseComponent },
  { path: 'feedback/:id', component: FeedbackComponent },
  { path: 'admin-dashboard', component:AdminDashboardComponent },
  { path: 'teachers', component:TeachersComponent },
  { path: 'students', component:StudentsComponent },
  { path: 'historic', component:HistoricComponent },
  { path: 'future', component:FutureComponent },
  { path: 'info-teacher/:id', component: InfoTeacherComponent },
  { path: 'result-search', component: ResultSearchComponent },
  { path: 'profilStu/:id', component: ProfileStudentComponent },
  { path: 'student-recherche/:id', component: StudentRechercheComponent },
  { path: 'student-acount/:id', component:StudentAcountComponent},
  { path: 'student-historic/:id', component:StudentHistoricComponent},
  { path: 'student-futur-courses/:id', component:StudentFuturCourseComponent},
  { path: 'student-modify-course/:id', component:StudentModifyCourseComponent},

  { path: 'student-message/:id', component:StudentMessageComponent },
  { path: 'my-teachers/:id', component:MyTeachersComponent },
  { path: 'aide', component:AideComponent },
  { path: 'teacher-message/:id', component:TeacherMessageComponent },

  { path: 'my-students/:id', component:MyStudentComponent },

  { path: 'coursim-of-teacher/:id', component:CoursimOfTeacherComponent},

  { path: 'dispo-teacher/:id', component:DisponibilitesComponent},
  { path: 'signin-teacher', component: SigninTeacherComponent},
  { path: 'teacher-current-course/:id', component: TeacherCurrentCourseComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
