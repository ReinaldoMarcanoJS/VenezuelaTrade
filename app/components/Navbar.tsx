import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";
export const Navbar = () => {
  return (
    <header className=" w-full sm:py-1 top-0 sm:px-4 lg:px-14 sm:shadow-md bg-slate-50">
      <section className="px-2 sm:px-0 container flex h-12 sm:h-14 justify-between  items-center ">
        <div className="flex items-center justify-center gap-1">
          <Image src={"/logo.png"} width={35} height={35} alt="image-logo  " className="w-8 h-8 lg:w-9 lg:h-9 mx-2 sm:mx-0" />
          <h2 className="  text-base ld:text-xl font-semibold font-sans min-[500px]:flex items-start justify-start">
            <span className="span-title">Venezuela</span>
            <span className="span-title">Trade</span>
          </h2>
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            className="hidden sm:block w-full md:w-[500px] h-9 bg-white border shadow-sm focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm border-gray-300 rounded-md focus-visible:border-indigo-500"
          />
          <CiShoppingCart size={35} className="hover:bg-slate-500 hidden sm:block" />
          <IoMenuSharp size={30} className="sm:hidden" color="#677D7B"/>
        </div>
      </section>

        <div className="sm:hidden flex justify-stretch gap-2 mx-2 mb-1.5">
        <input
            type="text"
            className="block sm:hidden w-full mb-2 md:w-[500px] h-7 bg-white border shadow-sm focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm border-gray-300 rounded-md focus-visible:border-indigo-500"
          />
          <CiSearch size={28}/>
        </div>



      <div className="hidden sm:flex justify-between gap-2 font-normal text-xs md:text-sm lg:text-base ">
        <ul>
          <li className="flex justify-around items-center gap-1">
            <Link href="/">Categorías</Link>
            <FaAngleDown />
          </li>
        </ul>
        <ul className="flex gap-2">
          <li className="flex items-center gap-3">
            <Link href="/sell">Vender</Link>
          </li>
          <li className="flex items-center gap-3">
            <Link href="/favorites">Favoritos</Link>
          </li>
          <li className="flex items-center gap-3">
            <Link href="/notifications">Notificaciones</Link>
          </li>
          <li className="flex items-center gap-3">
            <Link href="/messages">Mensajes</Link>
          </li>
          <li className="flex items-center gap-3">
            <Link href="/help">Ayuda</Link>
          </li>
        </ul>
        <ul className="flex gap-2">
          <li className="flex items-center gap-3">
            <Link href="/profile">Mi Perfil</Link>
          </li>
          <li className="flex items-center gap-3">
            <Link href="/settings">Ajustes</Link>
          </li>
          <li className="flex items-center gap-3">
            <Link href="/login">Iniciar Sesión</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
