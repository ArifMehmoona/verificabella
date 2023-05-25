import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Streaming, Brano, Artista } from './models/streaming.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  data: Streaming;

  constructor(private http: HttpClient) {
    this.http.get<Streaming>(' https://my-json-server.typicode.com/paolocarugati/sputifai/db')
      .subscribe((response) => {
        this.data = response;
      });
  }
}