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
      "id": 4,
      "description": "",
      "title": "BTB Instructor Team",
      "link": "",
      "status": 0,
      "position": 1,
      "updatedDateTime": "2015-11-22T11:37:30-05:00",
      "options": {
        "imageUrl": "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Galleries/1/7yHqhylvOED4.jpg",
        "thumbUrl": "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Galleries/1/7yHqhylvOED4_thumb.jpg",
        "htmlFragment": `<!-- LAYER NR. 1 -->
<div class="tp-caption sfb fadeout large_white"
	data-x="center"
	data-y="380"
	data-speed="500"
	data-start="1000"
	data-easing="zoomInUp"
	data-end-x="10000">
    
    <!--text-->
    Join the <strong class="text-red">BTB Team</strong> Today!
    <!---->
    
</div>`
      }
    },
    {
      "id": 2,
      "description": "",
      "title": "Diverse Training Options",
      "link": "",
      "status": 0,
      "position": 2,
      "updatedDateTime": "2019-07-07T11:16:41-04:00",
      "options": {
        "imageUrl": "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Galleries/1/N1pKkv0chu3i.jpg",
        "thumbUrl": "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Galleries/1/N1pKkv0chu3i_thumb.jpg",
        "htmlFragment": `<!-- LAYER NR. 1 -->
<div class="tp-caption sfb fadeout large_white"
	data-x="right"
	data-y="150"
	data-speed="500"
	data-start="1000"
	data-easing="easeOutQuad"
	data-end-x="10000"> 
	
	<!--text-->
	Where Training Meets Community
	<!---->
</div>`
      }
    },
    {
      "id": 8,
      "description": "",
      "title": "Martial Arts in the Lakes Region",
      "link": "",
      "status": 0,
      "position": 4,
      "updatedDateTime": "2019-07-07T14:38:56-04:00",
      "options": {
        "imageUrl": "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Galleries/1/8ar0GVlcJcSc.jpg",
        "thumbUrl": "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Galleries/1/8ar0GVlcJcSc_thumb.jpg",
        "htmlFragment": `<!-- LAYER NR. 1 -->
<div class="tp-caption sfb fadeout large_white"
	data-x="right"
	data-y="150"
	data-speed="500"
	data-start="1000"
	data-easing="easeOutQuad"
	data-end-x="10000"> 
	
	<!--text-->
    Boxing, Jiu Jitsu, MMA
    <!---->
  
</div>`
      }
    },
    {
      "id": 10,
      "description": "",
      "title": "A New Mission For Martial Arts",
      "link": "",
      "status": 0,
      "position": 5,
      "updatedDateTime": "2019-07-07T14:38:31-04:00",
      "options": {
        "imageUrl": "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Galleries/1/VGxIJLj4RvfL.jpg",
        "thumbUrl": "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Galleries/1/VGxIJLj4RvfL_thumb.jpg",
        "htmlFragment": `<!-- LAYER NR. 1 -->
<div class="tp-caption sfb fadeout large_white"
	data-x="right"
	data-y="150"
	data-speed="500"
	data-start="1000"
	data-easing="easeOutQuad"
	data-end-x="10000"> 
	
	  <!--text-->
    Focused on Community, Team Comradre, and Personal Growth
    <!---->
    
</div>`
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
