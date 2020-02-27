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
      description: "",
      title: "BTB Instructor Team",
      imageUrl: "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Galleries/1/7yHqhylvOED4.jpg",
      thumbUrl: "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Galleries/1/7yHqhylvOED4_thumb.jpg",
      htmlFragment: `Join the <strong class="text-red">BTB Team</strong> Today!`
    },
    {
      description: "",
      title: "Diverse Training Options",
      imageUrl: "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Galleries/1/N1pKkv0chu3i.jpg",
      thumbUrl: "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Galleries/1/N1pKkv0chu3i_thumb.jpg",
      htmlFragment: `Where Training Meets Community`
    },
    {
      description: "",
      title: "Martial Arts in the Lakes Region",
      imageUrl: "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Galleries/1/8ar0GVlcJcSc.jpg",
      thumbUrl: "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Galleries/1/8ar0GVlcJcSc_thumb.jpg",
      htmlFragment: `Boxing, Jiu Jitsu, MMA`
    },
    {
      description: "",
      title: "A New Mission For Martial Arts",
      imageUrl: "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Galleries/1/VGxIJLj4RvfL.jpg",
      thumbUrl: "https://aethercode-btbmartialarts.s3.amazonaws.com/assets/Galleries/1/VGxIJLj4RvfL_thumb.jpg",
      htmlFragment: `Focused on Community, Team Comradre, and Personal Growth`
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
