import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Foto } from "../foto/foto";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FotoService {

    private url = 'http://localhost:3000/v1/fotos/';
    
    constructor(private conexaoApi: HttpClient){}

    listar(): Observable<Foto[]> {
        return this.conexaoApi.get<Foto[]>(this.url)
    }

    cadastrar(foto: Foto): Observable<Object> {
        return this.conexaoApi.post(this.url,foto)
    }

    deletar(){}

    atualizar(){}

    buscar(){}

}