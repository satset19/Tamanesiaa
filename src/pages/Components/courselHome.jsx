"use client";

// import { Carousel } from "flowbite-react";
import img from "../../assets/yay.jpg";

export default function StaticCarousel() {
  return (
    <div className="carousel carousel-center rounded-box m-auto">
      <div className="carousel-item m-auto">
        <img src={img} alt="Pizza" />
      </div>
      <div className="carousel-item m-auto">
        <img src={img} alt="Pizza" />
      </div>
      <div className="carousel-item m-auto">
        <img src={img} alt="Pizza" />
      </div>
      <div className="carousel-item m-auto">
        <img src={img} alt="Pizza" />
      </div>
      <div className="carousel-item m-auto">
        <img src={img} alt="Pizza" />
      </div>
      <div className="carousel-item m-auto">
        <img src={img} alt="Pizza" />
      </div>
      <div className="carousel-item m-auto">
        <img src={img} alt="Pizza" />
      </div>
    </div>
  );
}
