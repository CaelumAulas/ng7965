import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpClientModule } from '@angular/common/http';
import { PainelComponent } from './painel/painel.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FotoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
