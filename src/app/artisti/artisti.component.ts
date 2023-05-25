import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Streaming, Artista } from '../models/streaming.model';

@Component({
  selector: 'app-artisti',
  templateUrl: './artisti.component.html',
  styleUrls: ['./artisti.component.css']
})
export class ArtistiComponent implements OnInit {
  artisti: Artista[];

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation().extras.state as Streaming;
    this.artisti = state.artisti;
  }

  ngOnInit() {
  }
}