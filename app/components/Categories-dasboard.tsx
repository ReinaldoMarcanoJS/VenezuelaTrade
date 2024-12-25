"use client";
import React, { useEffect } from "react";
import { Categories, Imagestype } from "@/types";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const CategoriesDasboard = () => {
  const categories: Categories[] = [
    {
      id: 1,
      name: "Clothes",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-12-20T11:19:20.000Z",
      updatedAt: "2024-12-20T11:19:20.000Z",
    },
    {
      id: 2,
      name: "Electronics",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
      creationAt: "2024-12-20T11:19:20.000Z",
      updatedAt: "2024-12-20T11:19:20.000Z",
    },
    {
      id: 3,
      name: "Furniture",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-12-20T11:19:20.000Z",
      updatedAt: "2024-12-20T11:19:20.000Z",
    },
    {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-12-20T11:19:20.000Z",
      updatedAt: "2024-12-20T11:19:20.000Z",
    },
    {
      id: 5,
      name: "Miscellaneous",
      image: "https://i.imgur.com/BG8J0Fj.jpg",
      creationAt: "2024-12-20T11:19:20.000Z",
      updatedAt: "2024-12-20T11:19:20.000Z",
    },
    {
      id: 17,
      name: "Electric",
      image:
        "https://media.istockphoto.com/id/1144423759/vector/electric-plug-icon-with-cord-stock-vector.jpg?s=612x612&w=0&k=20&c=gaL7s6huiB6tCI-wybq1Q1ui1zH4yoDB1cxUg8Z4aLw=",
      creationAt: "2024-12-20T18:00:26.000Z",
      updatedAt: "2024-12-20T18:00:26.000Z",
    },

    {
      id: 34,
      name: "blush",
      image:
        "https://sdcdn.io/mac/ae/mac_sku_M22011_1x1_0.png?width=1080&height=1080",
      creationAt: "2024-12-20T22:01:57.000Z",
      updatedAt: "2024-12-20T22:01:58.000Z",
    },
    {
      id: 36,
      name: "string",
      image: "https://i.imgur.com/BG8J0Fj.jpg",
      creationAt: "2024-12-20T22:02:32.000Z",
      updatedAt: "2024-12-20T22:02:32.000Z",
    },
    {
      id: 37,
      name: "Electronics",
      image: "https://i.imgur.com/BG8J0Fj.jpg",
      creationAt: "2024-12-20T22:04:21.000Z",
      updatedAt: "2024-12-20T22:04:21.000Z",
    },
    {
      id: 38,
      name: "category_B",
      image: "https://i.imgur.com/BG8J0Fj.jpg",
      creationAt: "2024-12-20T22:04:35.000Z",
      updatedAt: "2024-12-20T22:04:35.000Z",
    },
    {
      id: 39,
      name: "string",
      image: "https://i.imgur.com/BG8J0Fj.jpg",
      creationAt: "2024-12-20T22:04:36.000Z",
      updatedAt: "2024-12-20T22:04:36.000Z",
    },
    {
      id: 40,
      name: "string",
      image: "https://i.imgur.com/BG8J0Fj.jpg",
      creationAt: "2024-12-20T22:04:36.000Z",
      updatedAt: "2024-12-20T22:04:36.000Z",
    },
  ];

  const settings = {
    className: "center ",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 554,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidersPeRow: 2,
          rows:2
        }
      },
      {
        breakpoint: 324,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidersPeRow: 1,
          rows:2
        }
      }
    ]
  };
  return (
    <div key={1} className="container min-w-screen ">
      <div className="mb-3 bg-slate-50 p-2 m-auto rounded-t-md shadow-lg flex justify-between items-center px-8">
        <p className="font-medium text-lg">Categorias</p>
        <p className="text-[#018598] text-sm font-semibold hover:text-[#05415F] cursor-pointer">
          Mostrar todas {">>"}
        </p>
      </div>
      <div className={"slider-container "}>
        <Slider {...settings}>
          {categories.map(({ creationAt, id, image, name, updatedAt }) => (
            <div
              key={id}
              className=" my-2 p-1   rounded-md flex flex-col items-center justify-center   text-[#018598] hover:text-[#05415F]"
            >
              <h2 className="text-base md:text-xl  bg-slate-50 font-medium font-sans tracking-tight  px-2 rounded-t-lg">
                {name}
              </h2>
              <Image alt={name} width={300} height={300} src={image} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
