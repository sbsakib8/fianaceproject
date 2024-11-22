import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Btn from "../compronent/button/Btn";


 function Navbars() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About",
    "services",
    "projects",
    "contact",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className=" bg-inherit pt-3">
      <NavbarContent className=" ">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden "
        />
        <NavbarBrand>
          
          <p className="font-bold text-inherit">
            <img className=" w-80 h-32" src="logo (1).png" alt="" />
          </p>
        </NavbarBrand>
      </NavbarContent>

      
      <NavbarContent justify="end">
        
        <NavbarItem>
          <Btn title='Contact' className='bg-transparent border-primary border-[2px] text-primary font-bold text-[20px]'/>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className=" bg-[#1a1e1c]">
      <Btn title='Contact' className='bg-transparent border-primary border-[2px] text-primary font-bold text-[20px] mt-10 '/>
      </NavbarMenu>
    </Navbar>
  );
}
export default Navbars;
