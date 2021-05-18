import React from "react";
import Link from "next/link";
// styled components
import { NavLink, NavWrapper, NavLogo } from "../styles/styledComponents";

const Navbar = () => {
  return (
    <NavWrapper>
      <NavLogo>
        <h1>Basic List</h1>
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
