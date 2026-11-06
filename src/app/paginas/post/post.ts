import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerPagina } from '../../componentes/banner-pagina/banner-pagina';
import { Chamada } from '../../componentes/chamada/chamada';
import { CardPost } from '../../componentes/card-post/card-post';

@Component({
  imports: [BannerPagina, Chamada, RouterLink, CardPost],
  selector: 'app-post',
  styleUrl: './post.css',
  templateUrl: './post.html',
})
export class Post {}