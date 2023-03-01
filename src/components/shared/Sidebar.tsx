import { useAtomValue } from "jotai";
import { mobileMenuAtom } from "../../atoms/sidebar";
import { NavLink } from "react-router-dom";
import { icons } from "../../data/icons";
import LogoIcon from "../../Svg/LogoIcon";
import LogoutIcon from "../../Svg/LogoutIcon";
import clsx from "clsx";

export const Sidebar = () => {
  const showMobileMenu = useAtomValue(mobileMenuAtom);

  return (
    <div
      className={clsx(
        // Mobile
        `bg-mirage fixed top-0 w-[110px] h-full flex flex-col justify-between rounded-tr-xl rounded-br-xl z-50 transition-all`,
        showMobileMenu ? "left-0" : "-left-full",
        // Desktop
        `lg:left-0`
      )}
    >
      <div>
        <ul className="pl-4">
          <li className="px-4 py-6">
            <NavLink to="/" className="cursor-pointer flex justify-center">
              <LogoIcon />
            </NavLink>
          </li>
          {icons.map((link) => (
            <li
              key={link.id}
              className="hover:bg-charade p-4 rounded-tl-xl rounded-bl-xl group transition-colors"
            >
              <NavLink
                to={link.path}
                className="group-hover:bg-terracotta p-4 flex justify-center rounded-xl text-terracotta group-hover:text-white transition-colors fill-current"
              >
                {link.url}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="pl-4">
          <li className="hover:bg-charade p-2 rounded-tl-xl rounded-bl-xl group transition-colors">
            <NavLink
              to="/"
              className="group-hover:bg-terracotta p-2 flex justify-center rounded-xl text-terracotta transition-colors fill-current group-hover:text-white"
            >
              <LogoutIcon />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
