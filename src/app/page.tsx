import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar />
      <h1 className=" text-center font-bold text-3xl text-main-purple my-10">
        this is the main content
      </h1>
      <Footer />
    </main>
  );
}
