// import yayJpg from "../assets/yay.jpg";
// import "../../index.css";
import CorouselBesar from "./Components/courselHome";
import CardHome from "../pages/Components/CardHome";
import SmallCorousel from "./Components/SmallCorousell";

export default function HomePage() {
  return (
    <main>
      <CorouselBesar />
      <div className="px-20 py-20">
        <SmallCorousel />
      </div>

      <div className="flex flex-wrap gap-2 ">
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
      </div>
    </main>
  );
}
