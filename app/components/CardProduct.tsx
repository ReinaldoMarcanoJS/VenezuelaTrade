"use client";
import Image from "next/image";
import ModalProduct from "./ModalProduct";
import { Product } from "@/types";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { changeModalParam } from "@/lib/features/dashboard/dasboard.slice";
import { useEffect } from "react";
import { ImagesLinkHandler } from "@/lib/clearimageslinks";

interface props {
  Product: Product;
}
const CardProduct = ({ Product }: props) => {
  useEffect(() => {
    console.log(Product.images);
  }, []);
  const dispatch = useAppDispatch();
  const { id, title, images, description, price, creationAt, category } =
    Product;
  const modal = useAppSelector((state: RootState) => state.app.modal);
  let urlimages = ImagesLinkHandler(images);

  return (
    <div
      key={id}
      className="product-card bg-white rounded-lg shadow-md flex flex-col justify-between "
    >
      <Image
        height={224}
        width={310}
        src={category.image}
        alt={title}
        className="object-cover w-full h-56"
        loading="lazy"
        onClick={() => dispatch(changeModalParam())}
      />

      {modal && <ModalProduct product={Product} />}

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-sm">{description.slice(0, 100)}...</p>
        <div className="flex flex-col justify-between items-start mt-4">
          <span className="text-gray-500 text-sm">{category.name}</span>
          <span className="text-indigo-600 font-bold text-lg">
            Price: ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
