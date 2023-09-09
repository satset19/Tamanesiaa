import { Link, Outlet } from "umi";
import styles from "./index.less";
import "../../index.css";
import NavbarHome from "../pages/Components/NavbarHome";
import FooterHome from "../pages/Components/FooterHome";
export default function Layout() {
  return (
    <div className={styles.navs} data-theme="light">
      <div className="sticky top-0">
        <NavbarHome />
      </div>
      <div className="pt-8 ">
        <Outlet />
      </div>
      <section className="pt-5">
        <FooterHome />
      </section>
    </div>
  );
}
