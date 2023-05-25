import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Streaming, Brano } from '../models/streaming.model';

@Component({
  selector: 'app-brani',
  templateUrl: './brani.component.html',
  styleUrls: ['./brani.component.css']
})
export class BraniComponent implements OnInit {
  brani: Brano[];

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation().extras.state as Streaming;
    this.brani = state.brani;
    alert(this.brani.length);
  }

  ngOnInit() {
  }
}