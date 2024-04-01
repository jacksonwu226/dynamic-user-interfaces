import Image1 from '../images/image1.jpg';
import Image2 from '../images/image2.jpeg';
import Image3 from '../images/image3.jpg';

class Imageslider {
  constructor() {
    this.bodyElement = document.querySelector('body');
    this.createBoilerplate();
    this.cacheDom();
    this.addimages();
    this.addButtons();
    this.slides = document.querySelectorAll('.slides img');
    this.slideIndex = 0;
    this.intervalId = null;
    this.initializeSlider();
  }

  initializeSlider() {
    if (this.slides.length > 0) {
      this.slides[this.slideIndex].classList.add('displaySlide');
      this.intervalId = setInterval(() => this.nextSlide(), 5000);
    }
  }

  showSlide(index) {
    if (index >= this.slides.length) {
      this.slideIndex = 0;
    } else if (index < 0) {
      this.slideIndex = this.slides.length - 1;
    }
    this.slides.forEach((slide) => {
      slide.classList.remove('displaySlide');
    });
    this.slides[this.slideIndex].classList.add('displaySlide');
  }

  prevSlide() {
    clearInterval(this.intervalId);
    this.slideIndex -= 1;
    this.showSlide(this.slideIndex);
  }

  nextSlide() {
    this.slideIndex += 1;
    this.showSlide(this.slideIndex);
  }

  createBoilerplate() {
    this.bodyElement.insertAdjacentHTML('beforeend', `
    <div class="slider">
      <div class="slides">
      </div>
    </div>
  `);
  }

  cacheDom() {
    this.slider = document.querySelector('.slider');
    this.slides = document.querySelector('.slides');
  }

  addimages() {
    const image1 = new Image();
    const image2 = new Image();
    const image3 = new Image();

    image1.src = Image1;
    image2.src = Image2;
    image3.src = Image3;
    this.slides.appendChild(image1);
    this.slides.appendChild(image2);
    this.slides.appendChild(image3);
  }

  addButtons() {
    const leftButton = document.createElement('button');
    const rightButton = document.createElement('button');
    leftButton.classList.add('prev');
    rightButton.classList.add('next');
    leftButton.innerHTML = '&#10094';
    rightButton.innerHTML = '&#10095';

    leftButton.addEventListener('click', () => this.prevSlide());
    rightButton.addEventListener('click', () => this.nextSlide());

    this.slider.appendChild(leftButton);
    this.slider.appendChild(rightButton);
  }
}

export default Imageslider;
