"use client";
import { FormEvent } from "react";
import mapImg from "../../../public/assets/images/map.png";
import Image from "next/image";
function Location() {
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <section className=" p-6 rounded-2xl bg-white ">
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className=" flex-1 flex flex-col gap-3 text-sm "
      >
        <h1 className=" mb-4 capitalize text-xl font-bold ">
          organization location :
        </h1>
        <Image
          src={mapImg}
          width={120}
          height={120}
          alt="map"
          className=" w-full rounded-lg bg-cover bg-center"
        />
        <textarea
          className=" bg-main-gray p-4 rounded-md h-[100px] resize-none outline-none focus:outline-main-purple transition-all duration-200"
          name=""
          id=""
          placeholder="Discription"
          cols={10}
          rows={10}
        ></textarea>
        <button className=" rounded-md py-2 bg-main-purple text-gray-50  mt-4">
          Change User Infos
        </button>
      </form>
    </section>
  );
}

export default Location;
