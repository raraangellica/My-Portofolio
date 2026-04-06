import { NavLink } from "react-router";
import { NavList } from "../data/NavList";
import { useState } from "react";
import { Menu, CircleX } from "lucide-react";
import Button from "../atoms/Button";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <p className="logo">Stefani</p>
      <Button
        className="sm:hidden md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <CircleX /> : <Menu />}
      </Button>

      <ul
        className={`navbarMobile ${isOpen ? "flex" : "hidden"} navbarDesktop sm:hidden`}
      >
        {NavList.map((item) => (
          <a key={item.id} href={item.link}>
            {item.name}
          </a>
        ))}
      </ul>
      <ul className="navbarDesktop">
        {NavList.map((item) => (
          <a className="hover smooth" key={item.id} href={item.link}>
            {item.name}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Header;
