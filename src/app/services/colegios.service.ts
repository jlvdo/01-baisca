import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColegiosService {
  colegios: string[]=['Azarquiel','Infantes','Europa','El Greco'];

  constructor() {
    console.log('Iniciando el servico de Colegios');
   }

   

   getColegios(): string[]{
     //return this.colegios
     return [...this.colegios];
   }

   agregarColegio(){
      this.colegios.push(`Colegio número: ${this.colegios.length +1}`);
   }
   borrarColegios(){
     this.colegios.shift();
   }
}
