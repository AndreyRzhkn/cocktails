import { useState } from "react";
import { NavLink } from "react-router-dom";

import useClickOutside from "@shared/hooks/useClickOutside";
import { MenuItems } from "@shared/constants";

import closeIcon from "/close.svg";
import burgerIcon from "/burger.svg";
import classes from "./Menu.module.css";

const Menu = (): JSX.Element => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const menuRef = useClickOutside(() => setIsMenuHidden(true));

  const handleCloseMenu = () => {
    setIsMenuHidden(true);
  };

  const handleOpenMenu = () => {
    setIsMenuHidden(false);
  };

  return (
    <>
      <div className={classes.burgerMenu} data-opened={isMenuHidden} onClick={handleOpenMenu}>
        <img src={burgerIcon} alt='burger_icon' width={20} />
      </div>
      <div className={classes.container} data-opened={!isMenuHidden} ref={menuRef}>
        <div className={classes.menuItems}>
          {MenuItems.map((i) => (
            <NavLink
              key={i.value}
              to={`/${i.value}`}
              className={({ isActive }) => (isActive ? classes.activeItem : "")}
            >
              {i.title}
            </NavLink>
          ))}
        </div>
        <div className={classes.crossWrapper} onClick={handleCloseMenu}>
          <img src={closeIcon} alt='cross_icon' width={20} />
        </div>
      </div>
    </>
  );
};

export default Menu;
