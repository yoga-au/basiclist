import React from "react";
import Link from "next/link";
import Image from "next/image";
// styled components
import { NavLink, NavWrapper, NavLogo } from "../styles/styledComponents";

const Navbar = () => {
  return (
    <NavWrapper>
      <NavLogo>
        <Image src="/logo.png" width={128} height={77} />
      </NavLogo>
      <Link href="/">
        <NavLink>Home</NavLink>
      </Link>
      <Link href="/about">
        <NavLink>About</NavLink>
      </Link>
      <Link href="/staffs">
        <NavLink>Staffs</NavLink>
      </Link>
    </NavWrapper>
  );
};

export default Navbar;
