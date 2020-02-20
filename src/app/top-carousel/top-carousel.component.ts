import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-carousel',
  templateUrl: './top-carousel.component.html',
  styleUrls: ['./top-carousel.component.scss']
})
export class TopCarouselComponent implements OnInit {

  // ugly - but ported from old site / json data
  public slides = [
        {
            "id": 1,
            "description": "Feel like you've never felt before! Our group classes and personal trainers provide an amazing workout experience. Prepare to be amazed at what you're capable of!",
            "title": "Respect, Endurance, Stamina",
            "link": "",
            "status": 0,
            "position": 1,
            "updatedDateTime": "2016-02-05T18:00:42-05:00",
            "options": {
                "imageUrl": "https://aethercode-crossfitnv.s3.amazonaws.com/assets/Galleries/1/HdZx7cfAIYSy.jpg",
                "thumbUrl": "https://aethercode-crossfitnv.s3.amazonaws.com/assets/Galleries/1/HdZx7cfAIYSy_thumb.jpg",
                "htmlFragment": ""
            }
        },
        {
            "id": 2,
            "description": "So really you've got no excuse to not give it a try! We guarantee you'll leave feeling great, and maybe you'll make some friends in the process - CrossFit is very community oriented. Come join us today!",
            "title": "Your first 2 classes are free!",
            "link": "",
            "status": 0,
            "position": 2,
            "updatedDateTime": "2016-02-05T18:01:11-05:00",
            "options": {
                "imageUrl": "https://aethercode-crossfitnv.s3.amazonaws.com/assets/Galleries/1/sXca1uDE32Hc.jpg",
                "thumbUrl": "https://aethercode-crossfitnv.s3.amazonaws.com/assets/Galleries/1/sXca1uDE32Hc_thumb.jpg",
                "htmlFragment": ""
            }
        },
        {
            "id": 3,
            "description": "",
            "title": "",
            "link": "",
            "status": 0,
            "position": 3,
            "updatedDateTime": "2016-02-05T18:19:55-05:00",
            "options": {
                "imageUrl": "https://aethercode-crossfitnv.s3.amazonaws.com/assets/Galleries/1/XZpI0zgTVv49.jpg",
                "thumbUrl": "https://aethercode-crossfitnv.s3.amazonaws.com/assets/Galleries/1/XZpI0zgTVv49_thumb.jpg"
            }
        }
    ];

  constructor() { }

  ngOnInit() {
  }

}
