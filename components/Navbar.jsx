import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>Basic List</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/staffs">Staffs</Link>
    </nav>
  );
};

export default Navbar;
