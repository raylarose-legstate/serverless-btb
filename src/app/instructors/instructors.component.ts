import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {

  public cfg: any = {};

  public get owners() {
    return this.tagFilter("Owner");
  }

  public get headInstructors() {
    return this.tagFilter("HeadInstructor");
  }

  public get instructors() {
    return this.tagFilter("Staff");
  }

  public get directors() {
    return this.tagFilter("Director");
  }

  public selected: any;

  constructor(
    private config: ConfigService
  ) {
    this.cfg = this.config.staff;
   }

  ngOnInit() {
  }

  public tagFilter(tag) {
    return this.cfg.staff.filter(o => {
      return o.tags.find(t => t === tag);
    });
  }

}
