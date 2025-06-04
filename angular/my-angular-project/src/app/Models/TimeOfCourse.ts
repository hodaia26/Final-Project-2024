export class TimeOfCourse
{
    constructor(
      public  IdTime:number,public dateend:Date, public DateStart:Date, public idcourse:number
      )
    {
      this.IdTime=IdTime;
      this.DateStart=DateStart;
      this.dateend=dateend;
      this.idcourse=idcourse;
    }
}
