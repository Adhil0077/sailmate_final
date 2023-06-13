import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';








const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    title: "hi iam ",
    description: "jhkhjhkjhkhkjhkhkjhjhjkhk",
    imageSrc: "src/assets/boat_1.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    title: "",
    description: "jhkhjhkjhkhkjhkhkjhjhjkhk",
    imageSrc: "src/assets/boat_2.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    title: "",
    description: "jhkhjhkjhkhkjhkhkjhjhjkhk",
    imageSrc: "src/assets/boat_3.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    title: "",
    description: "jhkhjhkjhkhkjhkhkjhjhjkhk",
    imageSrc: "src/assets/boat_4.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Earthen Bottle",
    href: "#",
    title: "",
    description: "jhkhjhkjhkhkjhkhkjhjhjkhk",
    imageSrc: "src/assets/boat_5.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    name: "Nomad Tumbler",
    href: "#",
    title: "",
    description: "jhkhjhkjhkhkjhkhkjhjhjkhk",
    imageSrc: "src/assets/boat_6.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 7,
    name: "Focus Paper Refill",
    href: "#",
    title: "",
    description: "jhkhjhkjhkhkjhkhkjhjhjkhk",
    imageSrc: "src/assets/boat_7.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 8,
    name: "Machined Mechanical Pencil",
    href: "#",
    title: "",
    description: "jhkhjhkjhkhkjhkhkjhjhjkhk",
    imageSrc: "src/assets/boat_8.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

function Home() {
  const details = useSelector(state=>state.user)
  console.log(details);
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="bg-white -mt-40 w-screen">
        <div className="py-24 ">
          <div
            className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl  sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
            style={{
              backgroundImage: "url(src/assets/banner.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-20">
                <span className="text-5xl">SAIL</span>
                <br />
                <span className="text-5xl">THROUGH</span>
                <br />
                <span className="text-9xl">KERALA </span>
              </h2>

              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white/50 px-3.5 py-2.5 text-sm font-bold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white pl-8 pr-8 bg-opacity-50 backdrop-filter backdrop-blur"
                >
                  BOOK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* search */}

      <div className="  search-form relative max-w-6xl h-11 mx-auto  -mt-10 rounded-full shadow-lg transition duration-300 bg-white">
        {/* Search Input */}
        <input
          type="search"
          placeholder="Search"
          className="search-input absolute top-2 left-10 w-11/12 h-6 bg-transparent focus:outline-none ml-5"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="search-button absolute top-2 left-2 ml-5 w-6 h-6 bg-transparent focus:outline-none"
        >
          <svg
            className="w-6 h-6 fill-current text-gray-600 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="M 19.5 3 C 14.26514 3 10 7.2651394 10 12.5 C 10 14.749977 10.810825 16.807458 12.125 18.4375 L 3.28125 27.28125 L 4.71875 28.71875 L 13.5625 19.875 C 15.192542 21.189175 17.250023 22 19.5 22 C 24.73486 22 29 17.73486 29 12.5 C 29 7.2651394 24.73486 3 19.5 3 z M 19.5 5 C 23.65398 5 27 8.3460198 27 12.5 C 27 16.65398 23.65398 20 19.5 20 C 15.34602 20 12 16.65398 12 12.5 C 12 8.3460198 15.34602 5 19.5 5 z" />
          </svg>
        </button>

        {/* Search Options */}
        <div className="search-option absolute top-2 right-2  ">
          <div className="relative inline-block mx-1  cursor-pointer ">
            <input
              type="radio"
              name="type"
              value="type-users"
              id="type-users"
              className="hidden"
            />
          </div>
        </div>
      </div>

      {/* card */}
      <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <a key={product.id} href={product.href} className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-lg font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {product.name}
              </h3>
              <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {product.description}
              </p>
              <button className="mt-2 py-2 px-4 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity">
                Book
              </button>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</div>
{/* 
<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="relative">
        <div className="carousel-inner">
          <div className={`carousel-item ${activeSlide === 0 ? 'active' : ''}`}>
            <img className="d-block w-full" src="..." alt="First slide" />
          </div>
          <div className={`carousel-item ${activeSlide === 1 ? 'active' : ''}`}>
            <img className="d-block w-full" src="..." alt="Second slide" />
          </div>
          <div className={`carousel-item ${activeSlide === 2 ? 'active' : ''}`}>
            <img className="d-block w-full" src="..." alt="Third slide" />
          </div>
        </div>

        <button className="carousel-control-prev" onClick={handlePrevSlide}>
          <IoIosArrowBack className="carousel-control-icon" />
        </button>

        <button className="carousel-control-next" onClick={handleNextSlide}>
          <IoIosArrowForward className="carousel-control-icon" />
        </button>
      </div>
    </div> */}

    </>
  );
}

export default Home;
