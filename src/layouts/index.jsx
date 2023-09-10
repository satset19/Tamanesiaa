import { Link, Outlet } from "umi";
import styles from "./index.less";
import "../../index.css";
import NavbarHome from "../pages/Components/NavbarHome";
import FooterHome from "../pages/Components/FooterHome";
import BarAction from "../pages/Components/BarAction";
import { useStore } from "../model";
export default function Layout() {
  const { bar } = useStore((state) => {
    return state;
  });
  return (
    <div className={styles.navs} data-theme="light">
      {bar === true ? (
        <BarAction />
      ) : (
        <>
          <div className="sticky top-0">
            <NavbarHome />
          </div>
          <div className="">
            <Outlet />
          </div>
          <section className="pt-5">
            <FooterHome />
          </section>
        </>
      )}
    </div>
  );
}
