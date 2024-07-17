import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return <nav className="absolute top-0 left-0 w-full pt-10 text-white z-20">
    <div className="container">
      <div className="flex justify-between items-center">
        {/* logo section */}
        <h1 className="text-2xl font-semibold uppercase"><span className="text-primary">Coders </span> Coffee</h1>
        {/* hamburger menu section */}

        <div>
          <GiHamburgerMenu className="text-3xl cursor-pointer"/>
        </div>

      </div>
    </div>
  </nav>;
};

export default Navbar;
