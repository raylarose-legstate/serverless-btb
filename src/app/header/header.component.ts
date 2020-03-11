import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public cfg: any = {};

  public collapsed = true;

  constructor(
    private config: ConfigService
  ) { 
    this.cfg = this.config.header;
  }

  ngOnInit() {
  }

}
