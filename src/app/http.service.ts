import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Entities{
constructor(
  public id:String,
  public entity:String,
  public value: String,
  ){}
}

export class Comments{
  static id:String;
  constructor(
    public id:String,
    public comment:String,
    public label: String,
  ) {}
}

export interface IDatas{
  
  comment : String;
  label:String;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient:HttpClient
  ) {

   }
  baseUrl = 'http://localhost:8080/comments';
  baseEnt = 'http://localhost:8080/entities';

  getEntities(){
    return this.httpClient.get(this.baseEnt);
  }
  
  postEntity(entity: Entities){
    return this.httpClient.post(`${this.baseEnt}/post`,entity);

  }

  getComments()
  {
    console.log("blabla1");
    return this.httpClient.get(this.baseUrl);
    
  }
  getComment(id)
  {
    console.log("blabla2");
    return this.httpClient.get(`${this.baseUrl}/put/${id}`);
  }
 

  upload(file): Observable<any>  {
    
    return this.httpClient.post(`${this.baseUrl}/files`,file);

  }

  putLabel(id,com)
  {
    return this
                .httpClient
                .put(`${this.baseUrl}/put/${id}`,com)
  }

 
private DataUrl : string = "http://localhost:8080/comments/downloadFile/csvjson.json";


getData(): Observable<IDatas[]>{
  return this.httpClient.get<IDatas[]>(this.DataUrl);
}

postData(v : Comments): Observable<any> {
  return this
        .httpClient
        .post
        (`${this.baseUrl}/post`,v);

}

getDBl(){
  return this.httpClient.get(`${this.baseUrl}/number`)
}

Clean(){
  return this.httpClient.delete(`${this.baseUrl}/remove`)
}

}
