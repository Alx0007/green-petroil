import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Chamada } from '../../componentes/chamada/chamada';
import { CardPost } from '../../componentes/card-post/card-post';
import { Api } from '../../servicos/api';

@Component({
  imports: [Chamada, CardPost],
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio {
  private api = inject(Api);
  noticias = toSignal(this.api.buscarNoticias(), { initialValue: [] });
}