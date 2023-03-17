interface ImorganToken {
    method?: string;
    url?: string;
    status?: number;
    res?: ServerResponse;
    req?: IncomingMessage;
    ['response-time']?: number;
    [tokenName: string]: any;
  }
  type NewsByScopeType = "Internacional" | "Nacional" | "Provincial" | "Municipales"
  type NewsByCategory =
    "Politica" 
  | "Economia"  
  | 'Tecnología'
  | 'Cultura'
  | 'Deportes'
  | 'Ciencia'
  | 'Sociedad'
  | 'Entretenimiento';

  interface IError{
    title:string
    message:string
    code?:number
    data?:string|null
  }
  
  interface IDataResponse {
    ok:boolean;
    status:number;
    statusText:string|null;
    error:IError|null
    response:any
  }
  type RolType="god"|"admin"|"user"
  interface IUserObject{
    bitrhDate:date
    name:string,
    lastName:string,
    rol:string
    username:string
    password:string
    isVerified:boolean
    rol:RolType
  }
  interface IPostObject {
    title:string,
    post:string,
    photos:string[],
    isVisible:boolean,
    isPriority:boolean,
    category:string,
    scope:string,
    users:IUserObject[],
    adBanner1:Ads,
    adBanner2:Ads,
    adBanner3:Ads,
    loaderAdv:Ads
  }
interface IPostsDAO {
getAllPosts:()=>Promise<[any]>
getPostById:(id:string)=>Promise<any>
getPrevXPosts:(quantity:number)=>Promise<[any]>
getNextXPosts:(quantity:number)=>Promise<[any]>
createPost:(data:IPostObject)=>Promise<any>
updatePost:(data:IPostObject,id:string)=>Promise<any>
deletePostById:(id:string)=>Promise<any>

}