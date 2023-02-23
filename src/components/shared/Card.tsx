import { cards } from "../../data/cards";

export const Card = () => {
  return (
    <>
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
          <span className="text-gray-400 font-semibold">{card.price}</span>
          <p className="text-gray-600 font-semibold">{card.available}</p>
        </div>
      ))}
    </>
  );
};
