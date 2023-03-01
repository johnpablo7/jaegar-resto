import { NavLink } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { tabs } from "../../data/tabs";
import clsx from "clsx";

export const Header = () => {
  return (
    <header>
      {/* Title and Search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300 font-bold">Jaegar Resto</h1>
          <p className="text-gray-500 font-semibold">18 febero 2023</p>
        </div>
        <form action="">
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              className="bg-mirage w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none font-semibold"
              placeholder="Buscar"
            />
          </div>
        </form>
      </div>
      {/* Tabs */}
      <nav>
        <ul className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
          {tabs.map((list) => (
            <li key={list.id} className="py-2">
              <NavLink
                to={list.path}
                className={({ isActive }) =>
                  clsx(
                    "font-semibold pr-4 relative before:w-1/2 before:h-[4px] before:absolute before:left-0 before:rounded-full before:-bottom-[11px]",
                    isActive
                      ? "before:bg-terracotta text-terracotta"
                      : "text-gray-300"
                  )
                }
              >
                {list.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
