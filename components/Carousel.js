import React, { Component } from "react";
import Slider from "react-slick";

import styles from '../styles/Carousel.module.css'

export default class Carousel extends Component {

    constructor(props){
        super(props);
    }

  render() {
      var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={styles.carousel}>
        <h3 className={styles.title}> {this.props.title} </h3>
        <Slider {...settings}>
          {[1,2,3,4,5,6,7,8].map((item, index) => {
              return (
                  <div className={styles.items}>
                    <div className={styles.item} key={index}>{item}</div>
                    <div className={styles.descItem}>
                        <h5>Video Title</h5>
                        <p>Video describe</p>
                    </div>
                  </div>
              
              )
            })}
        </Slider>
      </div>
    );
  }
}