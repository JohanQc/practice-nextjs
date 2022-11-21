import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from 'react-icons/ri'

import { Banner, Container } from "../../components";

const NavItem = ({ href, children }) => {
  return (
    <li>
      <a href={href} className="font-semibold text-lg hover:text-white">{children}</a>
    </li>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
    document.body.style.overflow = "hidden"
  }

  const handleClose = () => {
    setIsOpen(false)
    document.body.style.overflow = "initial"
  }

  return (
    <header className="bg-black text-yellow">
      <Container>
        <div className="flex justify-between py-4">
          <span className="text-lg md:text-2xl">Montacargas MyP</span>
          <nav className={`fixed  top-0 ${isOpen ? "right-0" : "-right-full z-30"} bg-[#000000dd] w-full md:static md:bg-transparent md:w-[initial] h-screen md:h-[initial] z-20 md:z-0 flex items-center justify-center`}>
            <RiCloseFill onClick={handleClose} className="absolute top-4 right-4 text-4xl md:hidden" />
            <ul className="h-full flex flex-col md:flex-row justify-center md:justify-between gap-4 items-center">
              <NavItem href="#">Inicio</NavItem>
              <NavItem href="#aboutUs">Quiénes somos</NavItem>
              <NavItem href="#contact">Contáctanos</NavItem>
            </ul>
          </nav>
          <div className="md:hidden flex items-center text-3xl">
            <GiHamburgerMenu onClick={handleOpen} />
          </div>
        </div>
      </Container>
      <Banner />
    </header>
  );
};
