import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  imageObject: Array<object> = [{
    image: '../assets/gallery img/grapes-22.jpg',
    thumbImage: '../assets/gallery img/grapes-22.jpg',
    alt: 'alt of image'
}, {
    image: '../assets/gallery img/grapes-20.jpg', // Support base64 image
    thumbImage: '../assets/gallery img/grapes-20.jpg', // Support base64 image
    alt: 'grapes Image', //Optional: You can use this key if want to show image with alt
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: '../assets/gallery img/grapes-19.jpg', // Support base64 image
  thumbImage: '../assets/gallery img/grapes-19.jpg', // Support base64 image
  alt: 'grapes Image', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: '../assets/gallery img/grapes-18.jpg', // Support base64 image
  thumbImage: '../assets/gallery img/grapes-18.jpg', // Support base64 image
  alt: 'grapes Image', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}
,{
  image: '../assets/gallery img/grapes-17.jpg', // Support base64 image
  thumbImage: '../assets/gallery img/grapes-17.jpg', // Support base64 image
  alt: 'grapes Image', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: '../assets/gallery img/grapes-16.jpg', // Support base64 image
  thumbImage: '../assets/gallery img/grapes-16.jpg', // Support base64 image
  alt: 'grapes Image', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: '../assets/gallery img/grapes-15.jpg', // Support base64 image
  thumbImage: '../assets/gallery img/grapes-15.jpg', // Support base64 image
  alt: 'grapes Image', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}
];

}
