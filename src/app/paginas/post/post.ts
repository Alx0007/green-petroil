import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { BannerPagina } from '../../componentes/banner-pagina/banner-pagina';
import { Chamada } from '../../componentes/chamada/chamada';
import { CardPost } from '../../componentes/card-post/card-post';
import { Api } from '../../servicos/api';

@Component({
  imports: [BannerPagina, Chamada, RouterLink, CardPost],
  selector: 'app-post',
  styleUrl: './post.css',
  templateUrl: './post.html',
})
export class Post {
  private rota = inject(ActivatedRoute);
  private api = inject(Api);

  noticia = toSignal(
    this.rota.paramMap.pipe(
      switchMap((parametros) => this.api.buscarNoticia(parametros.get('id') ?? ''))
    )
  );

  noticias = toSignal(this.api.buscarNoticias(), { initialValue: [] });
}