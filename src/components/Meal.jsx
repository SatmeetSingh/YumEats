import { useState } from "react";
import { mealData } from "../data";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function Meal() {
  const [foods, setFoods] = useState(mealData);

  const FilterCatagory = (c) => {
    setFoods(
      mealData.filter((item) => {
        return item.category === c;
      })
    );
  };
  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2 ">
        <Link to="meal">Our Meal</Link>
      </h1>
      <div className="flex flex-col lg:flex-row justify-center ">
        <div className="flex justify-center md:justify-center">
          <button
            onClick={() => setFoods(mealData)}
            className="m-1 bg-orange-700 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            All
          </button>
          <button
            onClick={() => FilterCatagory("pizza")}
            className="m-1 bg-orange-700 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Pizza
          </button>
          <button
            onClick={() => FilterCatagory("chicken")}
            className="m-1 bg-orange-700 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Chicken
          </button>
          <button
            onClick={() => FilterCatagory("salad")}
            className="m-1 bg-orange-700 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700"
          >
            Salad
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4">
        {foods.map((item) => (
          <div
            className="border-none hover:scale-105 duration-300"
            key={item.image}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="flex justify-between px-2 py-2 ">
              <p className="font-bold">{item.name}</p>
              <p className="bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold">
                {item.price}
              </p>
            </div>
            <div className="pl-2 py-4 -mt-7">
              <Link
                to={`meal/${mealData.id}`}
                className="flex items-center text-indigo-600 "
              >
                View More
                <ArrowSmRightIcon className="h-[25px]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meal;
