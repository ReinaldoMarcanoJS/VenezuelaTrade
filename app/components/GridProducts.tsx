"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { Product } from "@/types";
import React, { useEffect } from "react";
import CardProduct from "./CardProduct";
import getProducts from "../api/products";
import { getProductsDispatch } from "@/lib/features/dashboard/dasboard.slice";

export const GridProducts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const Products = async () => {
      try {
        const reqAllProducts = await getProducts();
        if (reqAllProducts) {
          dispatch(getProductsDispatch(reqAllProducts));
        }
      } catch (error) {
        console.log(error);
      }
    }
    Products();
  }, []);

  const Products = useAppSelector((state: RootState) => state.app.products);
  
  return (
    <div
      key={"grid"}
      className="container min-w-screen grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4"
    >
      {Products.map((product: Product, i) => {
        return <CardProduct key={i} Product={product} />;

      })}
    </div>
  );
};
