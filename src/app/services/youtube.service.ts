import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment as env } from '../../environments/environment'
import * as data from './response.json';
import { Video } from '../types/Video';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor() { }

  async searchByKeyword(word: string) {
    let data = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=150&q=${word}&type=video&key=${env.G_API}&videoDuration=medium`)
    let json = data.data
    let res: Video[] = []
    for (let i of json.items) {
      res.push({
        videoId: i.id.videoId,
        thumbnailUrl: i.snippet.thumbnails.high.url,
        title: i.snippet.title
      })
    }
    return res;
  }

  returnDataFromJson(word: string) {
    let res: Video[] = []
    for (let i of data.items) {
      res.push({
        videoId: i.id.videoId,
        thumbnailUrl: i.snippet.thumbnails.high.url,
        title: i.snippet.title
      })
    }
    return res;
  }
}
