import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{
  title = 'Datos a mostrar';
  public listdeVideos:any=[]
  constructor (private RestService:RestService){

  }
  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get(`https://reqres.in/api/users`)
    .subscribe(respuesta =>{
      this.listdeVideos = respuesta;
    })
  }

}
