import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public blogPosts = [];
  public programs = [];
  public contact: any = {};
  public intro: any = {};

  public get year() {
    return new Date().getFullYear();
  }

  constructor(
    private config: ConfigService
  ) {
    this.intro = this.config.intro;
    this.contact = this.config.contact;
    this.blogPosts = this.config.blogs;
    this.programs = this.config.programs;
   }

  ngOnInit() {
  }

}
