import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { NextPage } from "next";
import Image from "next/image";

const MenuCard: NextPage<{
  link: string;
  name: string;
  price: string;
}> = ({ link, name, price }) => {
  return (
    <div id="recipe-card-example" className="w-full flex justify-center">
      <div className="bg-white m-5 p-11 rounded-3xl shadow-xl flex flex-col ">
        <div className="h-full">
          <Image
            className="rounded-full"
            src={link}
            width={240}
            height={240}
            layout="responsive"
            alt={link}
            objectFit="cover"
          />
        </div>
        <p className="mt-3 flex flex-col items-center ">
          <span className="font-roadstore text-lg text-center">{name}</span>
          <span className="font-poppins font-black">{price}</span>
        </p>
      </div>
    </div>
  );
};

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "60px",
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        <MenuCard
          link="/assets/images/image_placeholder.jpg"
          name="Peamir Signarture Sandwich"
          price="39,000"
        />
        <MenuCard
          link="/assets/images/image_placeholder.jpg"
          name="Peamir Signarture Sandwich"
          price="39,000"
        />
        <MenuCard
          link="/assets/images/image_placeholder.jpg"
          name="Peamir Signarture Sandwich"
          price="39,000"
        />
        <MenuCard
          link="/assets/images/image_placeholder.jpg"
          name="Peamir Signarture Sandwich"
          price="39,000"
        />
        <MenuCard
          link="/assets/images/image_placeholder.jpg"
          name="Peamir Signarture Sandwich"
          price="39,000"
        />
      </Slider>
    );
  }
}
