import { ConfigService } from './../config.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public cfg: any = {};
  public submitted = false;

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { 
    if (sessionStorage.getItem("captcha") === "1") this.submitted = true;
    this.cfg = this.config.contact;
  }

  ngOnInit() {
  }

  onSubmit({ value }: NgForm) {
    // silently bail
    if (!sessionStorage.getItem("captcha")) return;

    this.submitted = true;
    this.http.post(environment.mailer_endpoint, {
      data: value
    }).subscribe(r => {
      sessionStorage.setItem("captcha", "1");
    });
  }

}
