import React from "react";


import navbar from "../assets/portfolio/navbar.jpg";
import my_information from "../assets/portfolio/my_information.png";
import helpdesk from "../assets/portfolio/r_pro2.webp";
import laptop_shooping from "../assets/portfolio/redux_shooping.jpg";
import todo_list from "../assets/portfolio/todo_list1.jpg";
const Portfolio = () => {
  const portfolios = [
    
    {
      id: 2,
      src: laptop_shooping,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: todo_list,
    },
    {
      id: 5,
      src: helpdesk,
    },
    {
      id: 6,
      src: my_information,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
