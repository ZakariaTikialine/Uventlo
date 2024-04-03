import Image from "next/image";
import logo from "../../../public/assets/icons/Logo2.svg";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { useState } from "react";

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
  const [codeValue, setCodeValue] = useState("");
  return (
    <section className=" rounded-xl shadow-lg w-[30dvw] bg-main-gray ">
      <div className=" flex justify-center items-center second-frame-image rounded-t-xl p-4 ">
        <Image src={logo} alt="logo" width={120} height={100} />
      </div>
      <div className=" flex flex-col items-stretch p-8 gap-3">
        <h1 className=" text-center text-3xl font-bold mb-2">
          Confirmation Phase
        </h1>
        <p className=" text-gray-800 text-sm text-center">
          Please Check your email and enter the code provided whitin the next 15
          minutes
        </p>
        <div className=" flex items-center justify-center my-2">
          <InputOTP
            value={codeValue}
            onChange={(value) => setCodeValue(value)}
            maxLength={6}
          >
            <InputOTPGroup>
              <InputOTPSlot
                index={0}
                className=" w-11 h-11 text-2xl font-normal "
              />
              <InputOTPSlot
                index={1}
                className=" w-11 h-11 text-2xl font-normal "
              />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot
                index={2}
                className=" w-11 h-11 text-2xl font-normal "
              />
              <InputOTPSlot
                index={3}
                className=" w-11 h-11 text-2xl font-normal "
              />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot
                index={4}
                className=" w-11 h-11 text-2xl font-normal "
              />
              <InputOTPSlot
                index={5}
                className=" w-11 h-11 text-2xl font-normal "
              />
            </InputOTPGroup>
          </InputOTP>
        </div>
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
