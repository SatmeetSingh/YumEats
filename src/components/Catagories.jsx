import { categories } from "../data";

function Catagories() {
  return (
    <div className="max-w-[1520px] m-auto x-4 py-4">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2 ">
        Trending Catagories
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-5 py-5 px-2">
        {categories.map((item) => {
          return (
            <div
              className="p-4 flex justify-center items-center hover:scale-105 duration-300"
              key={item.image}
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-10 w-40 object-cover rounded-xl cursor-pointer shadow-2xl "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Catagories;
