import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-carousel',
  templateUrl: './top-carousel.component.html',
  styleUrls: ['./top-carousel.component.scss']
})
export class TopCarouselComponent implements OnInit {

  public slides: any[] = [];

  constructor(
    private config: ConfigService
  ) { 
    this.slides = this.config.topSlides;
  }

  ngOnInit() {
  }

}
