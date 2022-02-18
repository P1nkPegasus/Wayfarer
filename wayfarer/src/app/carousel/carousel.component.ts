import { Component, OnInit } from '@angular/core';

// interface carouselImage {
//   imageSrc: string;
//   imageAlt: string;
// }

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

  // TODO clean up carousel code
  // @Input() images:carouselImage[] = [];

  // selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
