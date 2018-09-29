import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { Router, ActivatedRoute } from '@angular/router';
import { FotoService } from '../services/foto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto: Foto = new Foto();
  formCadastro: FormGroup;
  
  constructor(private fotoService: FotoService
              ,private roteador: Router
              ,private rotaAtivada: ActivatedRoute
              ,private formBuilder: FormBuilder){}

  ngOnInit() {

    this.formCadastro = this.formBuilder.group({
      titulo: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      url: ['', Validators.required],
      descricao: ''
    })

    /* 
    this.rotaAtivada.params.subscribe(paramsRota => {
      console.log(paramsRota.fotoId);
    }) */
    let fotoId = this.rotaAtivada.snapshot.params.fotoId;

    if(fotoId){
      this.fotoService
          .buscar(fotoId)
          .subscribe(
            fotoApi => {
              this.foto = fotoApi
              this.formCadastro.patchValue(fotoApi)
            }
          )
    }
    
  }

  salvar(){

    this.foto = {...this.foto, ...this.formCadastro.value}

    if(this.foto._id){
      this.fotoService
          .atualizar(this.foto)
          .subscribe(
            resposta => console.log(resposta)
          )
    }
    else{
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
}
