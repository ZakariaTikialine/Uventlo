"use client";

import Link from "next/link";
import { useState } from "react";
import { FormEvent } from "react";

interface LinksType {
  name: string;
  url: string;
  icon: React.ReactNode;
}

function MediaLinks() {
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
        <h1 className=" mb-4 capitalize text-xl font-bold ">social links :</h1>
        <input
          type="text"
          placeholder="Facebook link : "
          className=" bg-main-gray py-2 px-4 rounded-md outline-none focus:outline-main-purple transition-all duration-200"
        />
        <input
          type="text"
          placeholder="LinkedIn link : "
          className=" bg-main-gray py-2 px-4 rounded-md outline-none focus:outline-main-purple transition-all duration-200"
        />
        <input
          type="text"
          placeholder="Instagram link : "
          className=" bg-main-gray py-2 px-4 rounded-md outline-none focus:outline-main-purple transition-all duration-200"
        />
        <input
          type="text"
          placeholder="Youtube link : "
          className=" bg-main-gray py-2 px-4 rounded-md outline-none focus:outline-main-purple transition-all duration-200"
        />
        <input
          type="text"
          placeholder="Twiter  link : "
          className=" bg-main-gray py-2 px-4 rounded-md outline-none focus:outline-main-purple transition-all duration-200"
        />
        <button className=" rounded-md py-2 bg-main-purple text-gray-50  mt-4">
          Change User Infos
        </button>
      </form>
    </section>
  );
}

export default MediaLinks;
