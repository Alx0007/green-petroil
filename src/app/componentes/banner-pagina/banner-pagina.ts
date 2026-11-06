import { Component, input } from '@angular/core';

@Component({
  selector: 'app-banner-pagina',
  imports: [],
  templateUrl: './banner-pagina.html',
  styleUrl: './banner-pagina.css'
})
export class BannerPagina {
  sobretitulo = input('');
  titulo = input('');
  descricao = input('');
}