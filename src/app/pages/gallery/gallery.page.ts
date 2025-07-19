import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { YoutubeService } from '../../services/youtube.service';
import { Router } from '@angular/router';
import { Video } from '../../types/Video';

@Component({
  selector: 'Gallery',
  standalone: true,
  imports: [CardComponent, LoaderComponent],
  templateUrl: './gallery.page.html',
  styleUrl: './gallery.page.css'
})

export class GalleryPage {
  items: Video[] = [];

  constructor(private ys: YoutubeService) {
    /* this.items
    ys.searchByKeyword('Recetas').then((i: Video[]) => {
      this.items = i
    }); */;
    setTimeout(() => {
      this.items = this.ys.returnDataFromJson('Recetas');
    }, 1000);
  }
}