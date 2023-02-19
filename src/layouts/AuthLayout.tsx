import { useAtom } from "jotai";
import { menuAtom } from "../atoms/sidebar.js";
// import { menuAtom, orderAtom } from "../atoms/sidebar.js";
import {
  RiHome3Line,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiMenu3Fill,
  RiCloseLine,
  RiSearch2Line,
} from "react-icons/ri";
import { Sidebar } from "../components/shared/Sidebar";
import { NavLink } from "react-router-dom";
import { tabs } from "../data/tabs.js";

export const AuthLayout = () => {
  const [showMenu, setShowMenu] = useAtom(menuAtom);
  // const [showOrder, setShowOrder] = useAtom(orderAtom);
  return (
    <div className="bg-charade w-full min-h-screen">
      {showMenu && <Sidebar />}
      {/* Menu movil */}
      <nav className="bg-mirage lg:hidden fixed w-full bottom-0 left-0 text-2xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiHome3Line />
        </button>
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiPieChartLine />
        </button>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-2 text-white"
        >
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6">
          {/* Header */}
          <header className="p-4">
            {/* Title and Search */}
            <div className="flex flex-col gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300 font-bold">
                  Pizzeria Destok
                </h1>
                <p className="text-gray-500">18 febero 2023</p>
              </div>
              <form action="">
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="text"
                    className="bg-mirage w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                    placeholder="Buscar"
                  />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav>
              <ul className="text-gray-300 flex items-center justify-between border-b">
                {tabs.map((list) => (
                  <li
                    key={list.id}
                    className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-terracotta before:left-0 before:rounded-full before:-bottom-[1px] text-terracotta font-bold"
                  >
                    <NavLink to={list.path}>{list.name}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
        </div>
        <div className="lg:col-span-2 fixed lg:static right-0">Carrito</div>
      </main>
    </div>
  );
};
