import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http:HttpClient) { }
  getList(searchString:String){
    return this.http.get<any>(`http://www.omdbapi.com/?apikey=52bd3b76&s=${searchString}&page=1&type=movie`);
  }
}
