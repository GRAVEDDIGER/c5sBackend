import {Model} from 'mongoose';

export class DataResponse implements IDataResponse{
    public ok: boolean;
    public statusText: string|null
    public status:number
    public error:IError|null
    public response:any
    
    constructor(
        ok:boolean,
        status:number,
        statusText:string|null,
        error:IError|null,
        response:any
    ){
    
    this.ok = ok;
    this.status = status;
    this.statusText=statusText
    this.error = error
    this.response=response
}
}
export class ErrorMessage implements IError {
  constructor(
    public title:string,
    public message:string,
    public code?:number,
    public data?:string

  ){}
}
