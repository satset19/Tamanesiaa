import React from "react";
import img from "../../assets/yay.jpg";

function CardHome() {
  return (
    <div className="mx-auto bg-white shadow-xl card w-96 max-sm:w-44 hover:bg-base-300">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="items-center text-center card-body">
        <h2 className="card-title max-sm:text-sm">Shoes!</h2>
        <p className=" max-sm:text-xs">
          If a dog chews shoes whose shoes does he choose?
        </p>
      </div>
    </div>
  );
}

export default CardHome;
