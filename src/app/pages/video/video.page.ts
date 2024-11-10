import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.page.html',
  styleUrl: './video.page.css'
})
export class VideoPage {
  selectedId: string | null;
  string: string = "https://www.youtube.com/embed/";

  sanitizerString:SafeResourceUrl;

  constructor(private route:ActivatedRoute, private sanitizer: DomSanitizer) {
    this.selectedId = this.route.snapshot.paramMap.get('id');
    this.sanitizerString = this.getSanitizeUrl();
  }

  getSanitizeUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(
       this.string + this.selectedId + "?autoplay=1" + "&controls=0"
    );
  }
}
