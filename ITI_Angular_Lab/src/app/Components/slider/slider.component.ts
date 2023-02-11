import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  imgs = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg'
  ];

  index = 0;
  myInterval:any;
  myImg:any;

  previous() {
    this.index--;
    if (this.index < 0) {
      this.index = 0;
    }
  }

  next() {
    this.index++;
    if (this.index >= this.imgs.length) {
      this.index = this.imgs.length - 1;
    }

  }

  play() {
    clearInterval(this.myInterval);
    this.myInterval = setInterval(() => {
      this.index++;
      if (this.index >= this.imgs.length) {
        this.index = 0;
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.myInterval);
  }

}
