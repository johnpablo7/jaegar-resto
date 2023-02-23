import { useAtom } from "jotai";
import { menuAtom, orderAtom } from "../atoms/sidebar.js";
import {
  RiHome3Line,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiMenu3Fill,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
// Components/shared
import { Sidebar } from "../components/shared/Sidebar";
import { Car } from "../components/shared/Car.js";
import { Header } from "../components/shared/Header.js";
import { Card } from "../components/shared/Card.js";

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
      {showOrder && <Car />}
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
      <main className="lg:pl-28 lg:pr-[420px] pb-16">
        <div className="p-4 md:p-8 lg:pt-6 lg:p-8">
          {/* Header */}
          <Header />
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
            <Card />
          </div>
        </div>
      </main>
    </div>
  );
};
