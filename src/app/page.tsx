import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import underline from "../../public/assets/images/underline.svg";
import woman from "../../public/assets/images/woman.svg"
import mainEllipse from "../../public/assets/images/mainEllipse.svg";
import Wave from "@/components/wave";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div>
        <h1 className=" text-center font-bold text-7xl my-6" style={{fontFamily: "Helvetica"}}>
          Effortlessly Manage Your <span className="font-bold text-7xl text-main-purple">Events.</span>
          <Image src={underline} alt="Underline" width={240} height={2} className="ml-auto mr-72"/>
        </h1>
        <h1 className=" text-center font-bold text-7xl my-6">From start to Finish</h1>
      </div>
      <div className="flex justify-center z-10">
        <div className="relative my-9 z-10">
          <Image src={mainEllipse} alt="Ellipse" width={450} height={450} />
          <Image
            src={woman}
            alt="Woman"
            width={438}
            height={430}
            style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%, -50%)" }}
          />
        </div>
      </div>
      <Wave />
      <div style={{background: 'linear-gradient(to bottom, #777AFF, #eef2ff)', height: '729px', width: '100%'}}>
        <p className="text-center text-white text-wrap text-5xl pt-16" style={{fontFamily: "Helvetica"}}> Plan , Promote, and execute flawless events with our intuitive event managment software</p>
      </div>
      <Footer />
    </main>
  );
}
