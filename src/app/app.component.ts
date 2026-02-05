import { NgFor } from '@angular/common';
import { HttpserviceService } from './httpservice.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieSearcher';
  searchString=""
  data:any;
  constructor(private http:HttpserviceService){
    this.http.getList(this.searchString).subscribe({
      next:(res)=>{
        this.data=res.Search
        console.log(this.data)
      }, error:(error)=>{
        console.error(error)
      }
    });
  }
  getMovies(){
    this.http.getList(this.searchString).subscribe({
      next:(res)=>{
        this.data=res.Search
        console.log(this.data)
      }, error:(error)=>{
        console.error(error)
      }
    });
  }
}
