import Image from "next/image";
import shape1 from "../../../public/assets/authAssets/shape1.svg";
import logoWithText from "../../../public/assets/authAssets/logoWithText.svg";
import googleLogo from "../../../public/assets/authAssets/googleLogo.svg";
import Link from "next/link";
function FirstRegFrame({
  currentFrame,
  setCurrentFrame,
}: {
  currentFrame: number;
  setCurrentFrame: Function;
}) {
  return (
    <section className=" flex relative  bg-main-gray rounded-xl shadow-lg w-[60dvw]">
      <div className=" flex-1 register-image rounded-xl p-4 text-center text-gray-50">
        <h1 className="text-2xl font-bold mt-14">Welcome Among Us</h1>
        <p className=" font-medium">Uventlo are happy to see you again !</p>
        <Image
          className=" absolute left-[-30px] top-[20px]"
          alt="e"
          src={shape1}
          width={80}
          height={80}
        />
      </div>
      <div className=" flex-1 flex flex-col gap-6 p-8 ">
        <Image
          className=" self-center"
          alt="e"
          src={logoWithText}
          width={122}
          height={122}
        />
        <h1 className=" text-2xl text-center font-bold text-gray-900">
          Sign Up to <span className=" text-main-purple">Uventlo </span>
        </h1>
        <form className=" flex flex-col justify-start gap-2 text-sm">
          <label className=" text-gray-700 mt-8" htmlFor="">
            Account Name
          </label>
          <input
            className=" py-2 px-4 rounded-md outline-none"
            type="text"
            placeholder="Enter your name "
          />
          <div className="flex gap-2 items-center mb-8">
            <input id="keep-me" type="checkbox" />
            <label className="text-sm " htmlFor="keep-me">
              Keep me signed up
            </label>
          </div>
          <button
            onClick={() => setCurrentFrame(currentFrame + 1)}
            className=" flex-1 bg-main-purple py-2 rounded-md text-gray-50 "
          >
            Sign Up
          </button>
          <span className=" text-gray-500 text-center ">Or</span>
          <button className="flex-1 flex py-2 items-center justify-center gap-2 border-[1px] rounded-md border-main-purple">
            Sign Up with Google
            <Image alt="e" src={googleLogo} width={20} height={20} />
          </button>
          <p className=" self-start text-sm text-gray-700 ">
            Already have an account?{" "}
            <Link
              className=" text-main-purple hover:font-bold transition"
              href={"/login"}
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default FirstRegFrame;
