"use client";

import img from "../../assets/gambar.jpg";

export default function StaticCarousel() {
  return (
    <section className="">
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://cdn.discordapp.com/attachments/1134859114477015151/1134861006099709993/IMG_3689.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center text-neutral-content">
          <div className="max-w-md py-10">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
    // <div className=" m-auto carousel carousel-center rounded-box bg-baseTheme ">
    //   {/* <div className="m-auto carousel-item w-screen">
    //     <div className="hero min-h-screen bg-base-200">
    //       <div className="hero-content text-center">
    //         <div className="max-w-md">
    //           <h1 className="text-5xl font-bold">Hello there</h1>
    //           <p className="py-6">
    //             Provident cupiditate voluptatem et in. Quaerat fugiat ut
    //             assumenda excepturi exercitationem quasi. In deleniti eaque aut
    //             repudiandae et a id nisi.
    //           </p>
    //           <button className="btn btn-primary">Get Started</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}
    //   <div className="m-auto carousel-item">
    //     <img src={img} alt="Pizza" />
    //   </div>
    //   <div className="m-auto carousel-item">
    //     <img src={img} alt="Pizza" />
    //   </div>
    //   <div className="m-auto carousel-item">
    //     <img src={img} alt="Pizza" />
    //   </div>
    //   <div className="m-auto carousel-item">
    //     <img src={img} alt="Pizza" />
    //   </div>
    //   <div className="m-auto carousel-item">
    //     <img src={img} alt="Pizza" />
    //   </div>
    //   <div className="m-auto carousel-item">
    //     <img src={img} alt="Pizza" />
    //   </div>
    // </div>
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
