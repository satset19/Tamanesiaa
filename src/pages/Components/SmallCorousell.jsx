import React from "react";
import img from "../../assets/yay.jpg";

function SmallCorousell() {
  return (
    <div class="carousel rounded-box ">
      <div class="carousel-item">
        <img src={img} className="object-fill h-48 w-96" />
      </div>
      <div class="carousel-item">
        <img src={img} className="object-fill h-48 w-96" />
      </div>
      <div class="carousel-item">
        <img src={img} className="object-fill h-48 w-96" />
      </div>
      <div class="carousel-item">
        <img src={img} className="object-fill h-48 w-96" />
      </div>
      <div class="carousel-item">
        <img src={img} className="object-fill h-48 w-96" />
      </div>
      <div class="carousel-item">
        <img src={img} className="object-fill h-48 w-96" />
      </div>
      <div class="carousel-item">
        <img src={img} className="object-fill h-48 w-96" />
      </div>
    </div>
  );
}

export default SmallCorousell;
