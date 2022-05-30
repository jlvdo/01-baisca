import { Component, OnInit } from '@angular/core';
import { ColegiosService } from '../services/colegios.service';

@Component({
  selector: 'app-colegios',
  templateUrl: './colegios.component.html',
  styleUrls: ['./colegios.component.css']
})
export class ColegiosComponent implements OnInit {

  colegios: string[]=[];
  constructor(private colegiosService: ColegiosService) { }

  ngOnInit(): void {
   this.cargarColegios();
    
  }

  cargarColegios(){
    this.colegios=this.colegiosService.getColegios();
  }
  agregarColegio():void {
    
    console.log('Agregar colegio')
    this.colegiosService.agregarColegio();
    this.cargarColegios();
   
  }
  borrarColegio():void{
    console.log('Eliminar colegio');
    this.colegiosService.borrarColegios();
    this.cargarColegios();
  }
}
