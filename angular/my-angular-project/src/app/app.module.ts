import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './all-components/login/login.component';
import { HomeComponent } from './all-components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileStudentComponent } from './all-components/student/profile-student/profile-student.component';
import { SigninComponent } from './all-components/signin/signin.component';
import { TeacherDashboardComponent } from './all-components/teacher/teacher-dashboard/teacher-dashboard.component';
import { AdminDashboardComponent } from './all-components/Admin/admin-dashboard/admin-dashboard.component';
import { StudentAcountComponent } from './all-components/student/student-acount/student-acount.component';
import { StudentHistoricComponent } from './all-components/student/student-historic/student-historic.component';
import { StudentFuturCourseComponent } from './all-components/student/student-futur-course/student-futur-course.component';
import { LoginTeacherComponent } from './all-components/login/login-teacher/login-teacher.component';
import { LoginStudentComponent } from './all-components/login/login-student/login-student.component';
import { StudentRechercheComponent } from './all-components/student/student-recherche/student-recherche.component';
import { TeacherHistoricComponent } from './all-components/teacher/teacher-historic/teacher-historic.component';
import { TeacherAcountComponent } from './all-components/teacher/teacher-acount/teacher-acount.component';
import { StudentModifyCourseComponent } from './all-components/student/student-modify-course/student-modify-course.component';
import { StudentsComponent } from './all-components/Admin/admin-dashboard/students/students.component';
import { TeachersComponent } from './all-components/Admin/admin-dashboard/teachers/teachers.component';
import { HistoricComponent } from './all-components/Admin/admin-dashboard/historic/historic.component';
import { FutureComponent } from './all-components/Admin/admin-dashboard/future/future.component';
import { InfoTeacherComponent } from './all-components/student/info-teacher/info-teacher.component';
import { ResultSearchComponent } from './all-components/student/result-search/result-search.component';
import { CurrentCourseComponent } from './all-components/student/current-course/current-course.component';
import { FeedbackComponent } from './all-components/student/feedback/feedback.component';
import { TeacherModifyCourseComponent } from './all-components/teacher/teacher-modify-course/teacher-modify-course.component';
import { AideComponent } from './all-components/aide/aide.component';
import { TeacherFuturCourseComponent } from './all-components/teacher/teacher-futur-course/teacher-futur-course.component';
import { StudentMessageComponent } from './all-components/student/student-message/student-message.component';
import { MyTeachersComponent } from './all-components/student/my-teachers/my-teachers.component';
import { TeacherMessageComponent } from './all-components/teacher/teacher-message/teacher-message.component';
import { MyStudentComponent } from './all-components/teacher/my-student/my-student.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CoursimOfTeacherComponent } from './all-components/teacher/coursim-of-teacher/coursim-of-teacher.component';
import { DisponibilitesComponent } from './all-components/teacher/disponibilites/disponibilites.component';
import { SigninTeacherComponent } from './all-components/signin/signin-teacher/signin-teacher.component';
import { TeacherCurrentCourseComponent } from './all-components/teacher/teacher-current-course/teacher-current-course.component';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileStudentComponent,
    SigninComponent,
    TeacherDashboardComponent,
    AdminDashboardComponent,
    StudentAcountComponent,
    StudentHistoricComponent,
    StudentFuturCourseComponent,
    LoginTeacherComponent,
    LoginStudentComponent,
    StudentRechercheComponent,
    TeacherHistoricComponent,
    TeacherAcountComponent,
    StudentModifyCourseComponent,
    StudentsComponent,
    TeachersComponent,
    HistoricComponent,
    FutureComponent,
    InfoTeacherComponent,
    ResultSearchComponent,
    CurrentCourseComponent,
    FeedbackComponent,
    TeacherModifyCourseComponent,
    AideComponent,
    TeacherFuturCourseComponent,
    StudentMessageComponent,
    MyTeachersComponent,
    TeacherMessageComponent,
    MyStudentComponent,
    CoursimOfTeacherComponent,
    DisponibilitesComponent,
    SigninTeacherComponent,
    TeacherCurrentCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
//kjhkgk
export class AppModule { }
