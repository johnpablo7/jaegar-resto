import { NavLink } from "react-router-dom";
import { icons } from "../../data/icons";
import LogoutIcon from "../../Svg/LogoutIcon";
import logo from "../../../public/icons/Logo.svg";

export const Sidebar = () => {
  return (
    <div className="bg-mirage fixed left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl">
      <div>
        <ul className="pl-4">
          <li className="p-4">
            <NavLink to="/" className="cursor-pointer flex justify-center">
              <img src={logo} alt="logo" />
            </NavLink>
          </li>
          {/* <li className="bg-charade p-4 rounded-tl-xl rounded-bl-xl">
            <Link
              to="/"
              className="bg-terracotta p-4 flex justify-center rounded-xl text-white"
            >
              <RiHome6Line className="text-2xl" />
            </Link>
          </li> */}
          {icons.map((link) => (
            <li
              key={link.id}
              className="hover:bg-charade p-4 rounded-tl-xl rounded-bl-xl group transition-colors"
            >
              <NavLink
                to={link.path}
                className="group-hover:bg-terracotta p-4 flex justify-center rounded-xl text-terracotta  group-hover:text-white transition-colors fill-current"
              >
                {link.url}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="pl-4">
          <li className="hover:bg-charade p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <NavLink
              to="/"
              className="group-hover:bg-terracotta p-4 flex justify-center rounded-xl text-terracotta transition-colors"
            >
              <LogoutIcon className="text-2xl group-hover:text-white fill-current" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
