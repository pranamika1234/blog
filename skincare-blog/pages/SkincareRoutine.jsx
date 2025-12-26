import Navbar from "../src/components/Navbar";
import Routine from "../src/components/Routine";
import Footer from "../src/components/Footer";
import { resolveComponent } from "../src/utils/resolveComponent";

export default function SkincareRoutine() {
  const NavbarComponent = resolveComponent(Navbar);
  const RoutineComponent = resolveComponent(Routine);
  const FooterComponent = resolveComponent(Footer);

  return (
    <>
      {NavbarComponent ? <NavbarComponent /> : null}
      {RoutineComponent ? <RoutineComponent /> : null}
      {FooterComponent ? <FooterComponent /> : null}
    </>
  );
}
