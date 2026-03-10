import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ask-ai',
  templateUrl: './ask-ai.component.html',
  styleUrls: ['./ask-ai.component.css']
})
export class AskAiComponent {

  question: string = "";
  video: any;
  transcript: any;
  apiStatus: string = 'First Ask your query?';
  baseUrl = 'https://youtubehelper-backend.onrender.com';
  // baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  search() {
    this.video = '';
    this.transcript = '';
    this.apiStatus = "Pls wait it taking some time to fetch the data from api...";

    this.http.get<any>(`${this.baseUrl}/search?query=${encodeURIComponent(this.question)}`)
      .subscribe({
        next: res => {
          this.video = res.video;
          this.transcript = res.transcript;

          const id = this.video.url.split("/")[3].split("?")[0];

          this.video.url = "https://www.youtube.com/embed/" + id;
          this.apiStatus = '';
        },error: err=>{
          this.apiStatus = err;

          setTimeout(()=>{
            this.apiStatus = '';
          },10000);

          console.error(err);
        }



      })

  }

  jumpTo(time: number) {

    const id = this.video.url.split("/embed/")[1];

    this.video.url = `https://www.youtube.com/embed/${id}?start=${Math.floor(time)}`;

  }

}
