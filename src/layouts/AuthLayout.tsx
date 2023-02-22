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
  RiArrowDownSLine,
} from "react-icons/ri";
import Delete from "../Svg/Delete";
import { Sidebar } from "../components/shared/Sidebar";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { tabs } from "../data/tabs.js";
import { cards } from "../data/cards.js";
import { buttons } from "../data/buttons.js";

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
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-16">
        <div className="lg:col-span-6 md:p-8">
          {/* Header */}
          <header>
            {/* Title and Search */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300 font-bold">
                  Pizzeria Resto
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
              <ul className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
                {tabs.map((list) => (
                  <li key={list.id} className="py-2">
                    <NavLink
                      to={list.path}
                      className={({ isActive }) =>
                        clsx(
                          "font-bold pr-4 relative before:w-1/2 before:h-[4px] before:absolute before:left-0 before:rounded-full before:-bottom-[11px]",
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
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300 font-bold">Choose Diches</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-mirage py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
            {/* Card */}
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-mirage p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300"
              >
                <img
                  src={card.img}
                  alt="beef"
                  className="w-40 h-40 object-cover -mt-24 shadow-2xl rounded-full"
                />
                <p className="text-xl">{card.title}</p>
                <span className="text-gray-400">{card.price}</span>
                <p className="text-gray-600">{card.available}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 fixed lg:static right-0 top-0 bg-mirage w-full h-full">
          {/* Orders */}
          <div className="relative pt-16 text-gray-300 p-6">
            <RiCloseLine className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-charade rounded-full text-xl" />
            <h1 className="text-2xl mt-4 mb-6 font-semibold">Orders #34562</h1>
            {/* Pills */}
            <div className="flex items-center gap-2 flex-wrap mb-8">
              {buttons.map((selects) => (
                <NavLink
                  to={selects.path}
                  key={selects.id}
                  className={({ isActive }) =>
                    clsx(
                      "py-2 px-4 rounded-xl font-semibold",
                      isActive
                        ? "bg-terracotta text-white"
                        : "text-terracotta border border-gray-500"
                    )
                  }
                >
                  {selects.name}
                </NavLink>
              ))}
            </div>
            {/* Car */}
            <div>
              <div className="grid grid-cols-6 mb-4 font-semibold">
                <h5 className="col-span-4">Item</h5>
                <h5 className="text-center">Qty</h5>
                <h5 className="text-end">Prices</h5>
              </div>
              {/* Product */}
              <div className="py-4 rounded-xl">
                <div className="grid grid-cols-6 mb-4">
                  {/* Product description */}
                  <div className="col-span-4 flex items-center gap-3">
                    <img
                      src="/images/spicy.png"
                      alt="spicy"
                      className="w-14 h-14 object-cover"
                    />
                    <div>
                      <h5 className="text-sm font-semibold">
                        Spicy seasoned seafood noodles
                      </h5>
                      <p className="text-xs text-gray-500 font-semibold">
                        $ 2.29
                      </p>
                    </div>
                  </div>
                  {/* Quantity */}
                  <div className="bg-charade w-14 h-14 flex items-center justify-center text-center place-items-center font-semibold border border-gray-600 rounded-xl">
                    <span>22</span>
                  </div>
                  {/* Price */}
                  <div className="flex items-center justify-center text-center font-semibold">
                    <span>$ 14.58</span>
                  </div>
                </div>
                {/* Note */}
                <div className="grid grid-cols-6 items-center gap-3">
                  <form className="col-span-5">
                    <input
                      type="text"
                      placeholder="Escribe tu comentario..."
                      className="bg-charade py-3 px-4 border border-gray-600 rounded-lg w-full outline-none"
                    />
                  </form>
                  <div className="flex items-center justify-center">
                    <button className="">
                      <Delete className="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
