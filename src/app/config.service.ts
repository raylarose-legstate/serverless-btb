import { Injectable } from '@angular/core';
import { topSlides, blogs, programs, staff, schedule, intro, contact, header } from "../compiled-config/config.json";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public get topSlides(): any[] {
    return topSlides.parsed;
  }

  public get blogs(): any[] {
    return blogs.parsed;
  }

  public get programs(): any[] {
    return programs.parsed;
  }

  public get staff(): any {
    return staff.parsed;
  }

  public get schedule(): any {
    return schedule.parsed;
  }

  public get intro(): any {
    return intro.parsed;
  }

  public get contact(): any {
    return contact.parsed;
  }

  public get header(): any {
    return header.parsed;
  }

  constructor() { }
}
