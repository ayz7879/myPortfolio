import React, { useState } from "react";
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./style.scss";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT",
    to: "/about",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
];

const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  const toogleHandleChange = () => {
    setToogle(!toogle);
    if (toogle == false) {
      document.querySelector(".right_cont").style.display = "flex";
    } else {
      document.querySelector(".right_cont").style.display = "none";
    }
  };

  return (
    <div className="navbar">
      {/* navbar left content */}
      <div className="left_cont">
        <FaReact className="nav_left_icon" size={40} />
      </div>

      {/* navbar right content */}
      <div className="right_cont">
        {data.map((item, key) => (
          <Link key={key} className="right_contents_items" to={item.to}>
            {item.label}
          </Link>
        ))}
      </div>

      {/* navbar right icon media quries */}
      <div className="right_bar_icon" onClick={toogleHandleChange}>
        {toogle ? <HiX size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );

  toogleHandleChange();
};

export default Navbar;
