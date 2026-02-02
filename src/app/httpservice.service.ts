import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http:HttpClient) { }
  getList(){
    this.http.get<any>("http://www.omdbapi.com/?apikey=52bd3b76&s=Deadpool&page=1&type=movie")
  }
}
