import { Routes } from '@angular/router';
import { GalleryPage } from './pages/gallery/gallery.page';
import { VideoPage } from './pages/video/video.page';

export const routes: Routes = [
    { path: '',   redirectTo: '/galeria', pathMatch: 'full' },
    { path: 'galeria', component: GalleryPage },
    { path: 'video/:id', component: VideoPage },
    //{ path: '**', component: PageNotFoundComponent }
];
