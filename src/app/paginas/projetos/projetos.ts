import { Component } from '@angular/core';
import { Chamada } from '../../componentes/chamada/chamada';
import { BannerPagina } from '../../componentes/banner-pagina/banner-pagina';

@Component({
  imports: [Chamada, BannerPagina],
  selector: 'app-projetos',
  styleUrl: './projetos.css',
  templateUrl: './projetos.html',
})
export class Projetos {}