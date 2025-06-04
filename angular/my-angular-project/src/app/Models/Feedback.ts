export class Feedback
{
    constructor(
      public  IdfeedBack:number,public idStudent:number,public idTeacher:number,public point:string,public remark:string,
      )
    {
      this.IdfeedBack=IdfeedBack;
      this.idStudent=idStudent;
      this.idTeacher=idTeacher;
      this.point=point;
      this.remark=remark;
      
    }
}

