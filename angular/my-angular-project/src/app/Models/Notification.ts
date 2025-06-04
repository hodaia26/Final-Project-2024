
export class Notification
{
    constructor(
      public  IdNotification:number,public Content:string,public  IdCourse:number, public Date:string, public Readed:string
      )
    {
      this.IdNotification=IdNotification;
      this.Content=Content;
      this.IdCourse=IdCourse;
      this.Date=Date;
      this.Readed=Readed;

    }
}
