import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto: Foto = new Foto();
  
  constructor(private conexaoApi: HttpClient) { }

  ngOnInit() {
  }

  salvar(){

    const cabecalho = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    this.conexaoApi
        .post('http://localhost:3000/v1/fotos',this.foto, cabecalho)
        .subscribe(
          (resposta) => {
            console.log(resposta);
          }
        )
  }
}
