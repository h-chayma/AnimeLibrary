import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import Swiper from 'swiper';
import { AnimeService } from '../service/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  imagesList: any;
  artistsList: any;

  constructor(private animeService: AnimeService) { }

  ngOnInit() {
    this.initSwipers();
    AOS.init();
    this.animeService.getRandomImagesList().subscribe((data) => {
      this.imagesList = data;
    });
    console.log("listhome : " + this.imagesList);
    this.animeService.getArtistsList().subscribe((data) => {
      this.artistsList = data;
    });
  }

  getLinkIcon(url: string): string {
    if (url.includes('pixiv.net')) {
      return '<i class="fab fa-pinterest"></i>';
    } else if (url.includes('twitter.com')) {
      return '<i class="fab fa-twitter"></i>';
    } else if (url.includes('fanbox.cc')) {
      return '<i class="fab fa-foursquare"></i>';
    } else {
      return '<i class="fas fa-link"></i>';
    }
  }

  convertOctetsToKilobytes(octets: number) {
    if (typeof octets !== 'number' || isNaN(octets)) {
      return 'Invalid input';
    }

    return (octets / 1024).toFixed(2) + ' KB';
  }

  initSwipers() {
    // Full Slider
    const fullSlider = new Swiper('.full-slider', {
      autoplay: {
        delay: 10000,
      },
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: false,
      keyboard: {
        enabled: true,
        onlyInViewport: false
      },
      on: {
        init: () => {
          this.animation('.full-slider');
          const pagination = document.querySelector('.full-slider .swiper-pagination');
          if (pagination) {
            pagination.classList.add('hide');
            setTimeout(() => {
              pagination.classList.remove('hide');
            }, 2000);
          }
        },
        slideChange: () => {
          this.animation('.full-slider');
        }
      }
    });

    // Mid Slider
    const midSlider = new Swiper('.slider-mid', {
      autoplay: true,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1023: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });

    // Min Slider
    const minSlider = new Swiper('.slider-min', {
      autoplay: {
        delay: 5000,
      },
      loop: true,
      slidesPerView: 2,
      spaceBetween: 15,
      breakpoints: {
        424: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        1023: {
          slidesPerView: 4,
          spaceBetween: 15
        },
        1199: {
          slidesPerView: 5,
          spaceBetween: 15
        }
      },
      pagination: false,
    });

    // No Slider
    const sliderDisabled = new Swiper('.no-slider', {
      autoplay: false,
      loop: false,
      keyboard: false,
      grabCursor: false,
      allowTouchMove: false,
      on: {
        init: () => {
          this.animation('.no-slider');
        }
      }
    });
  }

  private animation(slider: string) {
    const image = document.querySelector(`${slider} .swiper-slide-active img`);
    const title = document.querySelector(`${slider} .title`);
    const description = document.querySelector(`${slider} .description`);
    const btn = document.querySelector(`${slider} .btn`);
    const nav = document.querySelector(`${slider} nav`);

    if (image && title && description && btn && nav) {
      image.classList.toggle('aos-animate');
      title.classList.toggle('aos-animate');
      description.classList.toggle('aos-animate');
      btn.classList.toggle('aos-animate');
      nav.classList.toggle('aos-animate');

      setTimeout(() => {
        image.classList.toggle('aos-animate');
        title.classList.toggle('aos-animate');
        description.classList.toggle('aos-animate');
        btn.classList.toggle('aos-animate');
        nav.classList.toggle('aos-animate');

        AOS.refresh();
      }, 100);

      if (document.querySelector('.full-slider')?.classList.contains('animation')) {
        document.querySelector('.full-slider .left')?.classList.add('off');
        document.querySelector('.full-slider .left')?.classList.remove('init');
        setTimeout(() => {
          document.querySelector('.full-slider .left')?.classList.remove('off');
        }, 200);
        setTimeout(() => {
          document.querySelector('.full-slider .left')?.classList.add('init');
        }, 1000);
      } else {
        document.querySelector('.full-slider .left')?.classList.add('init');
      }
    }
  }
}