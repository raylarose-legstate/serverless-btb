import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  public cfg: any = {};

  constructor(
    private config: ConfigService
  ) { 
    this.cfg = this.config.schedule;
  }

  ngOnInit() {
  }

}
