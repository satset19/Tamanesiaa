import yayJpg from "../assets/yay.jpg";
// import "../../index.css";
import CustomControls from "./Components/courselHome";
import CardHome from "../pages/Components/CardHome";
import SmallCorousel from "./Components/SmallCorousell";

export default function HomePage() {
  return (
    <>
      <CustomControls />
      <div className="py-10">
        <SmallCorousel />
      </div>

      <div className="m-auto grid grid-cols-4 lg:grid-cols-3 2xl:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-2 gap-2">
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
