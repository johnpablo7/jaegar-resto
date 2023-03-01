import clsx from "clsx";
import { useAtom } from "jotai";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { mobileOrderAtom } from "../../atoms/sidebar";
import { buttons } from "../../data/buttons";
import { cards } from "../../data/cards";
import Delete from "../../Svg/Delete";

export const Car = () => {
  const [showMobileOrder, setShowMobileOrder] = useAtom(mobileOrderAtom);

  return (
    <div
      className={clsx(
        // Mobile
        `lg:col-span-2 fixed top-0 bg-mirage w-full lg:w-[420px] h-full transition-all z-50`,
        showMobileOrder ? "right-0" : "-right-full",
        `lg:right-0`
      )}
    >
      {/* Orders */}
      <div className="relative pt-16 lg:pt-4 text-gray-300 p-6 lg:p-4 h-full">
        <RiCloseLine
          onClick={() => setShowMobileOrder(false)}
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
                      alt="img"
                      className="w-14 h-14 object-cover"
                    />
                    <div>
                      <h5 className="text-sm font-semibold">{order.title}</h5>
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
  );
};
