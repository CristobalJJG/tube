import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import * as data from './response.json';
import { LoaderComponent } from '../../components/loader/loader.component';
import { YoutubeService } from '../../services/youtube.service';
import { Router } from '@angular/router';

@Component({
  selector: 'Gallery',
  standalone: true,
  imports: [CardComponent, LoaderComponent],
  templateUrl: './gallery.page.html',
  styleUrl: './gallery.page.css'
})

export class GalleryPage {
  items: Video[] = [];

  constructor(private ys:YoutubeService){
    //La llamada yha va a retornar esto
    this.items 
    ys.searchByKeyword('Recetas').then((i:Video[]) => {
      this.items = i
    });
  }
}

export interface Video{
  videoId: string,
  thumbnailUrl:string,
  title:string,
}