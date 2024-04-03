"use client";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

function WorkingHours() {
  const [workingHours, setWorkingHours] = useState([
    {
      day: "Wednsday",
      hours: {
        from: "7PM",
        to: "10PM",
      },
    },
    {
      day: "Sunday",
      hours: {
        from: "7PM",
        to: "10PM",
      },
    },
  ]);
  const [day, setDay] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const removeHour = (index: number) => {
    setWorkingHours((prevHours) => {
      const updatedHours = [...prevHours];
      updatedHours.splice(index, 1);
      return updatedHours;
    });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setWorkingHours((prevHours) => {
      return [
        ...prevHours,
        {
          day,
          hours: {
            from,
            to,
          },
        },
      ];
    });
    setDay("");
    setFrom("");
    setTo("");
    console.log(e.target);
  };
  return (
    <section className=" p-6 rounded-2xl bg-white ">
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className=" flex-1 flex flex-col gap-3 text-sm "
      >
        <h1 className=" mb-4 capitalize text-xl font-bold ">working hours :</h1>
        {workingHours.map((hour, index) => (
          <div className=" flex items-center justify-stretch gap-2">
            <p className=" text-gray-600">{hour.day} :</p>
            <p className=" text-main-purple font-semibold mr-6">
              {hour.hours.from} - {hour.hours.to}
            </p>
            <Button onClick={() => removeHour(index)} variant="outline">
              Remove
            </Button>
          </div>
        ))}
        <hr className="my-4" />
        <div className=" flex flex-col gap-2 ">
          <label htmlFor="">Day :</label>
          <input
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className=" bg-main-gray py-2 px-4 rounded-md outline-none focus:outline-main-purple transition-all duration-200"
            type="text"
            placeholder=" Enter your Agency type"
          />
          <div className=" flex items-center justify-between gap-4 mt-4 ">
            <label htmlFor="">From :</label>
            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className=" w-[100px] bg-main-gray py-2 px-4 rounded-md outline-none focus:outline-main-purple transition-all duration-200"
              type="text"
              placeholder=" 10 AM"
            />
            <label htmlFor=""> To :</label>
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className=" w-[100px] bg-main-gray py-2 px-4 rounded-md outline-none focus:outline-main-purple transition-all duration-200"
              type="text"
              placeholder=" 12 PM"
            />
          </div>
        </div>
        <button
          onSubmit={handleFormSubmit}
          className=" rounded-md py-2 bg-main-purple text-gray-50  mt-4"
        >
          Add
        </button>
      </form>
    </section>
  );
}

export default WorkingHours;
