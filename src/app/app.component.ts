import { HttpserviceService } from './httpservice.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieSearcher';
  data:any;
  constructor(private http:HttpserviceService){
    this.http.getList().subscribe({
      next:(res)=>{
        console.log(res)
      }, error:(error)=>{
        console.error(error)
      }
  });
  }
}
