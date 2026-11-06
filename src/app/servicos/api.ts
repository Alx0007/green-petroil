import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../modelos/noticia';
import { Projeto } from '../modelos/projeto';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private http = inject(HttpClient);
  private endereco = 'http://localhost:3000';

  buscarNoticias() {
    return this.http.get<Noticia[]>(this.endereco + '/posts');
  }

  buscarNoticia(id: string) {
    return this.http.get<Noticia>(this.endereco + '/posts/' + id);
  }

  buscarProjetos() {
    return this.http.get<Projeto[]>(this.endereco + '/projetos');
  }
}