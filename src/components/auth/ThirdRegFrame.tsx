import Image from "next/image";
import logo from "../../../public/assets/icons/Logo2.svg";

function ThirdRegFrame({
  currentFrame,
  setCurrentFrame,
}: {
  currentFrame: number;
  setCurrentFrame: Function;
}) {
  const handelSumbit = () => {
    setCurrentFrame(currentFrame + 1);
  };
  return (
    <section className=" rounded-xl shadow-lg w-[30dvw] bg-main-gray ">
      <div className=" flex justify-center items-center second-frame-image rounded-t-xl p-4 ">
        <Image src={logo} alt="logo" width={120} height={100} />
      </div>
      <div className=" flex flex-col p-8 gap-3">
        <h1 className=" text-center text-3xl font-bold mb-2">
          Confirmation Phase
        </h1>
        <p className=" text-gray-800 text-sm text-center">
          Please Check your email and enter the code provided whitin the next 15
          minutes
        </p>
        <input
          className=" focus:outline-1 focus:outline-main-purple mb-4 text-center py-2 px-4 rounded-md outline-none"
          type="text"
          placeholder="Enter your code here"
        />
        <button
          onClick={() => handelSumbit()}
          className=" flex-1 bg-main-purple py-2 rounded-md text-gray-50 text-center"
        >
          Submit
        </button>
        <span className="relative before:absolute  before:w-[calc(50%_-_20px)] before:h-[1px] before:bg-gray-400 before:right-0 before:top-[50%] after:absolute  after:w-[calc(50%_-_20px)] after:h-[1px] after:bg-gray-400 after:left-0 after:top-[50%] text-gray-500 uppercase text-center ">
          Or
        </span>
        <button className=" py-2 border-[1px] rounded-md border-main-purple text-main-purple/80">
          Resend Code
        </button>
      </div>
    </section>
  );
}

export default ThirdRegFrame;
