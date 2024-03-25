import Image from "next/image";
import rigesterWomen from "../../../public/assets/authAssets/registerWomen.png";
import logo from "../../../public/assets/icons/Logo2.svg";
import Typewriter from "typewriter-effect";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FormEvent } from "react";

function SecondRegFrame({
  currentFrame,
  setCurrentFrame,
}: {
  currentFrame: number;
  setCurrentFrame: Function;
}) {
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <section className="bg-main-gray rounded-xl shadow-lg w-[60dvw]">
      <div className=" flex items-center rounded-t-xl second-frame-image p-4 justify-between">
        <Image src={logo} width={100} height={100} alt="logo" />
        <div className=" text-2xl font-bold text-gray-50">
          <Typewriter
            options={{
              strings: ["Dream ...", "Thrive ..."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <hr
        className={`h-2 my-0 border-none  ${
          currentFrame == 1 ? "w-[50%] rounded-r-lg" : "w-full"
        } bg-main-purple transition-all duration-1000`}
      />
      <div className=" py-4 px-8 flex items-center justify-between">
        {currentFrame == 1 ? (
          <form
            onSubmit={(e) => handleFormSubmit(e)}
            className=" flex-1 flex flex-col gap-2 text-sm "
          >
            <h1 className=" mb-4 capitalize text-2xl font-bold ">
              <span className=" text-main-purple font-bold text-[60px]">.</span>
              organization informations
            </h1>
            <label htmlFor="">Organizer name / Company </label>
            <input
              className=" py-2 px-4 rounded-md outline-none"
              type="text"
              placeholder=" Enter your Organizer/Company name"
            />
            <label htmlFor="">Agency type</label>
            <input
              className=" py-2 px-4 rounded-md outline-none"
              type="text"
              placeholder=" Enter your Agency type"
            />
            <label htmlFor="">Country</label>
            <input
              className=" py-2 px-4 rounded-md outline-none"
              type="text"
              placeholder=" Enter your Country"
            />
            <label htmlFor="">Postion</label>
            <input
              className=" py-2 px-4 rounded-md outline-none"
              type="text"
              placeholder=" Enter your Postion"
            />
            <button
              onClick={() => setCurrentFrame(currentFrame + 1)}
              className=" flex items-center justify-center gap-2 py-2 bg-main-purple text-gray-50 rounded-sm mt-4"
            >
              Next
              <IoIosArrowRoundForward />{" "}
            </button>
          </form>
        ) : currentFrame == 2 ? (
          <form
            onSubmit={(e) => handleFormSubmit(e)}
            className=" flex-1 flex flex-col gap-2 text-sm "
          >
            <h1 className=" mb-4 capitalize text-2xl font-bold ">
              <span className=" text-main-purple font-bold text-[60px]">.</span>
              organization informations
            </h1>
            <label htmlFor="">Full name </label>
            <input
              className=" py-2 px-4 rounded-md outline-none"
              type="text"
              placeholder=" Enter your Full name"
            />
            <label htmlFor="">Email address</label>
            <input
              className=" py-2 px-4 rounded-md outline-none"
              type="email"
              placeholder=" Enter your Agency type"
            />
            <label htmlFor="">Passowrd</label>
            <input
              className=" py-2 px-4 rounded-md outline-none"
              type="password"
              placeholder=" Enter your Passowrd"
            />
            <label htmlFor="">Phone number</label>
            <input
              className=" py-2 px-4 rounded-md outline-none"
              type="text"
              placeholder=" Enter your Phone number"
            />
            <button
              onClick={() => setCurrentFrame(currentFrame + 1)}
              className=" flex items-center justify-center gap-2 py-2 bg-main-purple text-gray-50 rounded-sm mt-4"
            >
              Submit
              <IoIosArrowRoundForward />{" "}
            </button>
          </form>
        ) : (
          <div></div>
        )}

        <div className=" flex-1 flex items-center justify-center">
          <Image
            src={rigesterWomen}
            width={240}
            height={240}
            alt="regiter women"
          />
        </div>
      </div>
    </section>
  );
}

export default SecondRegFrame;
