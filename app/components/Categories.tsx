"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  image: string;
  button: string;
}

const cards = [
  {
    title: "Inicia sesión",
    description: "Accede a tu cuenta para ver tus pedidos y favoritos.",
    image: "/categories/iniciar-sesion.png",
    button: "Iniciar sesión",
  },
  {
    title: "Vender",
    description: "Vende tus productos por todo el pais.",
    image: "/categories/sell-category.png",
    button: "Vender",
  },
  {
    title: "Zapatos",
    description: "Encuentra los zapatos perfectos.",
    image: "/categories/zapato-categories.png",
    button: "Ver zapatos",
  },
  {
    title: "Electrónicos",
    description: "Explora nuestra amplia gama de dispositivos electrónicos.",
    image: "/categories/electronico-category.png",
    button: "Ver electrónicos",
  },
  {
    title: "Hogar",
    description: "Todo lo que necesitas para tu hogar.",
    image: "/categories/hogar-categories.png",
    button: "Ver hogar",
  },
  {
    title: "Autos",
    description: "Accesorios y productos para tu automóvil.",
    image: "/categories/car-categories.png",
    button: "Ver autos",
  },
  {
    title: "Categorías",
    description: "Descubre todas nuestras categorías.",
    image: "/categories/categories-categories.png",
    button: "Ver categorías",
  },
];
export const Categories = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 3
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <div className="slider-container mb-6 px-4 ">
      <Slider {...settings}>
       {cards.map((card) => (
      <Card key={card.title} {...card} /> // Pass card data to Card component
    ))}
      </Slider>
    </div>
  );
};
const Card = ({ title, button, description, image }: CardProps) => {
  return (
    <div className="m-auto slide w-28 h-36 sm:w-32 sm:h-40  md:w-44 md:h-60 lg:w-52 lg:h-64  bg-white rounded-lg shadow-md  mt-5 flex justify-between flex-col items-center p-1">
      <div className="md:pt-2">
        <h5 className="md:mb-2 text-xs lg:text-xl font-medium font-sans tracking-tight text-gray-900">
          {title}
        </h5>
      </div>
      <div className="w-full ">
        <Image
          width={112}
          height={112}
          src={image}
          alt={title}
          className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 m-auto drop-shadow-lg rounded-lg"
        />
        <p className="font-normal text-[8px] md:text-xs text-center text-gray-700  lg:my-2 ">
          {description}
        </p>
      </div>
      <div className="w-full flex md:mb-1">
        <button className="w-full md:w-11/12 text-[#018598] m-auto border shadow-md focus:ring-4 rounded-md text-[10px] md:text-sm font-semibold sm:py-1 md:py-2 text-center">
          {button}
        </button>
      </div>
    </div>
  );
};

export default Card;

