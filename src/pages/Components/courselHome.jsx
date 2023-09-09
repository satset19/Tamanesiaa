"use client";

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
    // <div class="w-full carousel">
    //   <div id="slide1" class=" w-full pt-20 carousel-item">
    //     <img src={img} class="w-full" />
    //     <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
    //   </div>
    //   <div id="slide2" class=" w-full pt-20 carousel-item">
    //     <img src={img} class="w-full" />
    //     <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
    //   </div>
    //   <div id="slide3" class=" w-full pt-20 carousel-item">
    //     <img src={img} class="w-full" />
    //     <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
    //   </div>
    //   <div id="slide4" class=" w-full pt-20 carousel-item">
    //     <img src={img} class="w-full" />
    //     <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
    //   </div>
    // </div>
  );
}
