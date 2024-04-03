"use client";

import { FormEvent } from "react";

function Description() {
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <section className=" p-6 rounded-2xl bg-white flex flex-col gap-6 ">
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className=" flex-1 flex flex-col gap-2 text-sm "
      >
        <h1 className=" mb-4 capitalize text-xl font-bold ">
          organization informations :
        </h1>
        <label htmlFor="">Organizer name / Company </label>
        <input
          className=" bg-main-gray py-2 px-4 rounded-md outline-none focus:outline-main-purple transition-all duration-200"
          type="text"
          placeholder=" Enter your Organizer/Company name"
        />
        <label htmlFor="">Agency type</label>
        <input
          className=" bg-main-gray py-2 px-4 rounded-md outline-none focus:outline-main-purple transition-all duration-200"
          type="text"
          placeholder=" Enter your Agency type"
        />
        <label htmlFor="">Description</label>

        <textarea
          className=" bg-main-gray p-4 rounded-md h-[200px] resize-none outline-none focus:outline-main-purple transition-all duration-200"
          name=""
          id=""
          placeholder="Discription"
          cols={10}
          rows={10}
        ></textarea>
        <label htmlFor="">Organnzation Contact</label>
        <input
          className=" bg-main-gray py-2 px-4 rounded-md outline-none focus:outline-main-purple transition-all duration-200"
          type="text"
          placeholder=" Enter your Agency type"
        />
        <button className=" rounded-md py-2 bg-main-purple text-gray-50  mt-4">
          Change User Infos
        </button>
      </form>
    </section>
  );
}

export default Description;
