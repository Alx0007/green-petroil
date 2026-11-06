import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Chamada } from '../../componentes/chamada/chamada';
import { BannerPagina } from '../../componentes/banner-pagina/banner-pagina';
import { CardProjeto } from '../../componentes/card-projeto/card-projeto';
import { Api } from '../../servicos/api';

@Component({
  imports: [Chamada, BannerPagina, CardProjeto],
  selector: 'app-projetos',
  styleUrl: './projetos.css',
  templateUrl: './projetos.html',
})
export class Projetos {
  private api = inject(Api);
  projetos = toSignal(this.api.buscarProjetos(), { initialValue: [] });
}