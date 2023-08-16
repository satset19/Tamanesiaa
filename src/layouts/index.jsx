import { Link, Outlet } from "umi";
import styles from "./index.less";
import "../../index.css";
import NavbarHome from "../pages/Components/NavbarHome";
export default function Layout() {
  return (
    <div className={styles.navs}>
      <NavbarHome />
      <div className=" pt-8">
        <Outlet />
      </div>
    </div>
  );
}
