import yayJpg from "../assets/yay.jpg";
// import "../../index.css";
import CorouselBesar from "./Components/courselHome";
import CardHome from "../pages/Components/CardHome";
import SmallCorousel from "./Components/SmallCorousell";

export default function HomePage() {
  return (
    <>
      <CorouselBesar />
      <div className="px-20 py-20">
        <SmallCorousel />
      </div>

      <div className="grid grid-cols-4 gap-4 m-auto lg:grid-cols-3 2xl:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-2 max-sm:gap-1">
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
      </div>
    </>
  );
}
