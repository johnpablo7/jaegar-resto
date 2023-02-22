import { useAtom } from "jotai";
import { menuAtom, orderAtom } from "../atoms/sidebar.js";
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
  const [showOrder, setShowOrder] = useAtom(orderAtom);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

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
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="p-2 text-white">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 pb-16">
        <div className="lg:col-span-6 p-4 md:p-8 lg:pt-6 lg:px-1">
          {/* Header */}
          <header>
            {/* Title and Search */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300 font-bold">
                  Pizzeria Resto
                </h1>
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
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300 font-bold">Choose Diches</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-mirage py-2 px-4 rounded-lg font-semibold">
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
                  className="w-40 h-40 object-cover -mt-24 shadow-2xl rounded-full"
                />
                <p className="text-xl font-bold">{card.title}</p>
                <span className="text-gray-400 font-semibold">
                  {card.price}
                </span>
                <p className="text-gray-600 font-semibold">{card.available}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`lg:col-span-2 fixed top-0 bg-mirage w-full lg:w-[430px] lg:right-0 h-full transition-all ${
            showOrder ? "right-0" : "-right-full"
          }`}
        >
          {/* Orders */}
          <div className="relative pt-16 lg:pt-4 text-gray-300 p-6 lg:p-4 h-full">
            <RiCloseLine
              onClick={toggleOrders}
              className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-charade rounded-full text-xl"
            />
            <h1 className="text-2xl mt-4 mb-6 font-semibold">Orders #34562</h1>
            {/* Pills */}
            <div className="flex items-center gap-2 flex-wrap mb-8">
              {buttons.map((selects) => (
                <NavLink
                  to={selects.path}
                  key={selects.id}
                  className={({ isActive }) =>
                    clsx(
                      "py-2 px-4 rounded-xl font-medium",
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
              <div className="grid grid-cols-6 mb-4 font-semibold border-b border-[#393C49] pb-6">
                <h5 className="col-span-4">Item</h5>
                <h5 className="text-center md:text-right md:pr-4">Qty</h5>
                <h5 className="text-end md:text-right md:pr-4">Prices</h5>
              </div>
              {/* Products */}
              <div className="h-[400px] md:h-[700px] lg:h-[550px] overflow-scroll">
                {/* Product */}
                {cards.map((order) => (
                  <div key={order.id} className="py-4 rounded-xl">
                    <div className="grid grid-cols-6 mb-4 md:gap-16 lg:gap-1">
                      {/* Product description */}
                      <div className="col-span-4 flex items-center gap-3">
                        <img
                          src={order.img}
                          alt="spicy"
                          className="w-14 h-14 object-cover"
                        />
                        <div>
                          <h5 className="text-sm font-semibold">
                            {order.title}
                          </h5>
                          <p className="text-xs text-gray-400 font-bold">
                            {order.price}
                          </p>
                        </div>
                      </div>
                      {/* Quantity */}
                      <div className="bg-charade w-14 h-14 flex items-center justify-center text-center md:justify-self-end font-semibold border border-gray-600 rounded-xl">
                        <span>{order.qty}</span>
                      </div>
                      {/* Price */}
                      <div className="flex items-center justify-center text-center font-semibold">
                        <span>{order.total}</span>
                      </div>
                    </div>
                    {/* Note */}
                    <div className="grid grid-cols-6 items-center gap-3 md:gap-16 lg:gap-1">
                      <form className="col-span-5">
                        <input
                          type="text"
                          placeholder="Escribe tu comentario..."
                          className="bg-charade py-3 px-4 border border-gray-600 rounded-lg w-full outline-none"
                        />
                      </form>
                      <div className="flex items-center justify-center">
                        <button>
                          <Delete />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Submit payment */}
            <div className="bg-mirage absolute w-full bottom-0 left-0 px-6 py-4 md:px-8 lg:px-5">
              <div className="border-b border-[#393C49] mb-6"></div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Discount</span>
                <span className="font-semibold">$ 0</span>
              </div>
              <div className="flex items-center justify-between mb-10">
                <span className="text-gray-400">Sub total</span>
                <span className="font-semibold">$ 201,03</span>
              </div>
              <div className="bg-terracotta w-full py-4 px-4 rounded-lg text-center text-white mb-2">
                <NavLink to="/">Continue to Payment</NavLink>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
