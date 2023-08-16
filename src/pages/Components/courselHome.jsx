"use client";

// import { Carousel } from "flowbite-react";
import img from "../../assets/yay.jpg";

export default function StaticCarousel() {
  return (
    <div className="py-10 m-auto carousel carousel-center rounded-box ">
      <div className="m-auto carousel-item">
        <img src={img} alt="Pizza" />
      </div>
      <div className="m-auto carousel-item">
        <img src={img} alt="Pizza" />
      </div>
      <div className="m-auto carousel-item">
        <img src={img} alt="Pizza" />
      </div>
      <div className="m-auto carousel-item">
        <img src={img} alt="Pizza" />
      </div>
      <div className="m-auto carousel-item">
        <img src={img} alt="Pizza" />
      </div>
      <div className="m-auto carousel-item">
        <img src={img} alt="Pizza" />
      </div>
      <div className="m-auto carousel-item">
        <img src={img} alt="Pizza" />
      </div>
    </div>
  );
}
