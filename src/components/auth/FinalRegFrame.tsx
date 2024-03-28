import logo from "../../../public/assets/icons/Logo2.svg";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";
function FinalRegFrame() {
  const router = useRouter();
  const handelClick = () => {
    router.push("/profile/userProfile");
  };
  return (
    <section className=" hover:scale-105 transition-all duration-500 cursor-pointer rounded-xl shadow-lg w-[28dvw] bg-main-gray ">
      <div className=" flex justify-center items-center second-frame-image rounded-t-xl p-4 ">
        <Image src={logo} alt="logo" width={120} height={100} />
      </div>
      <div className=" flex flex-col items-center gap-4 p-8">
        <h1 className=" text-main-purple text-center text-3xl font-bold mb-2">
          Congratulation !
        </h1>
        <p className=" text-gray-800 text-sm text-center">
          Welcome among our Team , We encourage you to watch the vedio tutorial
          by clicking here.
        </p>
        <button
          onClick={() => handelClick()}
          className=" flex items-center justify-center rounded-full p-4 bg-gradient-to-r from-[#B224EF] to-[#7579FF]"
        >
          <FaCheck className=" text-gray-50 text-4xl font-light" />
        </button>
      </div>
      <h1></h1>
    </section>
  );
}

export default FinalRegFrame;
