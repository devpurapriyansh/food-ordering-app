"use client"; 

import { ProductType } from "@/types/types";
import { useCartStore } from "@/utils/store";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Price = ({ product }: { product: ProductType }) => {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  const { addToCart } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    if (product.options?.length) {
      setTotal(
        quantity * product.price + product.options[selected].additionalPrice
      );
    }
  }, [quantity, selected, product]);

  const handleCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: total,
      ...(product.options?.length && {
        optionTitle: product.options[selected].title,
      }),
      quantity: quantity,
    });
    toast.success("Added to cart");
  };

  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-2xl font-bold  ">${total}</h2>

      {/* Options Container */}
      <div className="flex gap-2">
        {product.options?.length &&
          product.options?.map((option, index) => (
            <button
              className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md "
              key={option.title}
              style={{
                background: selected === index ? "rgb(248,113,113)" : "white",
                color: selected === index ? "white" : "red",
              }}
              onClick={() => setSelected(index)}>
              {option.title}
            </button>
          ))}
      </div>
      {/* Quantity and Button Container */}
      <div className="flex justify-between item-center ">
        {/* Quantity */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500 items-center">
          <span>Quantity</span>
          <div className="flex gap-4 items-center  ">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              className="text-2xl">
              {"-"}
            </button>
            <span className="">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 5 ? prev + 1 : 5))}
              className="text-xl">
              {"+"}
            </button>
          </div>
        </div>
        {/* Cart Button */}
        <button
          className=" uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500 "
          onClick={handleCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
