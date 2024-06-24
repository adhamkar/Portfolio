import { Component,AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{

  ngAfterViewInit() {
    const aboutSection = document.querySelector('#about');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (aboutSection) {
            aboutSection.classList.add('animate-pulse');
            observer.unobserve(entry.target);  // Stop observing after the animation is added
          }
        }
      });
    }, { threshold: 0.1 });

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    const educationSection=document.querySelector('#education');
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (educationSection) {
            educationSection.classList.add('animate-pulse');
            observer1.unobserve(entry.target);  // Stop observing after the animation is added
          }
        }
      });
    }, { threshold: 0.1 });
    if(educationSection){
      observer1.observe(educationSection);
    }
  }
 
  
  

}
