import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Foto } from '../foto/foto';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title = 'Caelumpic';
  listaFotos;
  
  constructor(private fotoService: FotoService){

    this.fotoService.listar()
              .subscribe(
                fotosApi => this.listaFotos = fotosApi
                ,erro => console.log(erro)
              ) 
  }

  ngOnInit() {
  }

  excluir(foto: Foto){
    console.log(`Apagou ${foto.titulo}`);

    this.fotoService.deletar()  
  }

}
