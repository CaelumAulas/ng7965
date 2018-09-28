import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { Router } from '@angular/router';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto: Foto = new Foto();
  
  constructor(private fotoService: FotoService
              ,private roteador: Router){}

  ngOnInit() {
  }

  salvar(){
    console.log(this.foto);

    this.fotoService
        .cadastrar(this.foto)
        .subscribe(
          resposta => {
            console.log(resposta);
            this.roteador.navigate(['']);
          }
          , erro => console.log(erro)
        )
  }
}
