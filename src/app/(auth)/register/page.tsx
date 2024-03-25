"use client";
import RegisterForm from "@/components/auth/RegisterForm";
import { useState } from "react";
function Regsiter() {
  const [currentFrame, setCurrentFrame] = useState(0);

  return (
    <div className=" flex justify-center items-center h-[calc(100dvh_-80px)] w-screen">
      <RegisterForm
        currentFrame={currentFrame}
        setCurrentFrame={setCurrentFrame}
      />
    </div>
  );
}

export default Regsiter;
