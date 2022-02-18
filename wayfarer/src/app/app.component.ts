import { Component } from '@angular/core';
import { CITIES } from './cities'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wayfarer';
  cities = CITIES;

  images = [
    {
      // imageSrc: './gibraltar/gibraltar1-pexels-anna-urlapova-2968743.jpg',
      imageSrc: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).webp", 
      imageAlt: '', 
      text: '365 Days Of weddings a year'
    },
    {
      // imageSrc: './gibraltar/gibraltar2-pexels-martin-magnemyr-5101563.jpg', 
      imageSrc: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).webp", 
      imageAlt: '', 
      text: '365 Days Of weddings a year'
    },
    {
      // imageSrc: './london/london1-pexels-chris-schippers-427679.jpg', 
      imageSrc: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).webp", 
      imageAlt: '', 
      text: '365 Days Of weddings a year'
    },
    {
      // imageSrc: './london/london2-pexels-pixabay-460672.jpg', 
      imageSrc: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).webp", 
      imageAlt: '', 
      text: '365 Days Of weddings a year'
    },
    {
      imageSrc: './san-francisco/san-francisco1-pexels-pixabay-208745.jpg', 
      imageAlt: '', 
      text: '365 Days Of weddings a year'
    },
    {
      imageSrc: './san-francisco/san-francisco2-pexels-pixabay-258447.jpg', 
      imageAlt: '', 
      text: '365 Days Of weddings a year'}
   ];
   
}
