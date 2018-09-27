import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title = 'Caelumpic';
  listaFotos;

  constructor(conexaoApi: HttpClient){
    
    conexaoApi.get('http://localhost:3000/v1/fotos')
              .subscribe(
                fotosApi => this.listaFotos = fotosApi
                ,erro => console.log(erro)
              )
  }

  ngOnInit() {
  }

}
