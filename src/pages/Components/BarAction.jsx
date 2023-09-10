import NavbarHome from "./NavbarHome";
import logo from "../../assets/TamanesiaZine.png";
import { useStore } from "../../model";

function BarAction() {
  const { bar, setBar } = useStore((state) => {
    return state;
  });

  const handleClose = () => {
    setBar(false);
  };
  return (
    <section className="bg-baseTheme text-white top-0 w-screen h-screen font-bold font-Calistoga shadow-md">
      <div className="flex">
        <div className="flex px-2 py-3">
          <button onClick={handleClose} className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
            </svg>
          </button>
          <a href="#" className="px-5 ">
            <img src={logo} className="h-10"></img>
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4 py-4 ">
          <a href="#" className=" hover:text-blue-600">
            Home
          </a>
          <a href="#" className=" hover:text-blue-600">
            About
          </a>
          <a href="#" className=" hover:text-blue-600">
            Services
          </a>
          <a href="#" className=" hover:text-blue-600">
            Contact
          </a>
          {/* <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Sign Up
            </a> */}
        </div>{" "}
      </div>
    </section>
  );
}

export default BarAction;
