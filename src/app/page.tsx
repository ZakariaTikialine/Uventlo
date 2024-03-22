import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import underline from "../../public/assets/images/underline.svg";
import woman from "../../public/assets/images/woman.svg"
import mainEllipse from "../../public/assets/images/mainEllipse.svg";
import Wave from "@/components/wave";
import highlight from "../../public/assets/images/highlight.svg";
import image1 from "../../public/assets/images/image1.svg";
import image2 from "../../public/assets/images/image2.svg";
import image3 from "../../public/assets/images/image3.svg";
import image4 from "../../public/assets/images/image4.svg";
import image5 from "../../public/assets/images/image5.svg";
import image6 from "../../public/assets/images/image6.svg";
import quotes from "../../public/assets/images/Quotes.svg";
import event from "../../public/assets/images/event.svg";

export default function Home() {
  const items = [1, 2, 3, 4, 5, 6];
  const items2 = [1, 2, 3, 4];

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
      <div style={{background: 'linear-gradient(to bottom, #777AFF, #fff)', height: '729px', width: '100%'}}>
        <p className="text-center text-white text-wrap text-5xl pt-16" style={{fontFamily: "Helvetica"}}> Plan , Promote, and execute flawless events with our intuitive event managment software</p>
        <div className="flex justify-center mt-16 mx-8 gap-4">
          {items2.map((item) => (
            <div key={item} className="w-1/4 bg-gray-300 rounded-lg shadow-lg p-6 " style={{height : '400px'}}>
            </div>
          ))}
        </div>
      </div>
      <div style={{fontFamily: "Helvetica"}}>
        <h1 className=" text-center fo</div>nt-bold text-5xl my-6" >
          <Image src={highlight} alt="Underline" width={50} height={50} className="ml-auto" style={{marginRight: '610px'}}/>
            They <span className="font-bold text-5xl text-main-purple">Trusted</span> us
        </h1>
        <h3 className=" text-center font-bold text-xl my-6 text wrap">  We've had the pleasure of working with industry-defining brands, such as </h3>
      </div>
      <div className="flex justify-center mt-16">
          <div className="w-1/6 mx-4">
            <Image src={image1} alt={`Image 1`} width={300} height={300} />
          </div>
          <div className="w-1/6 mx-4">
            <Image src={image2} alt={`Image 2`} width={300} height={300} />
          </div>
          <div className="w-1/6 mx-4">
            <Image src={image3} alt={`Image 3`} width={300} height={300} />
          </div>
          <div className="w-1/6 mx-4">
            <Image src={image4} alt={`Image 4`} width={300} height={300} />
          </div>
          <div className="w-1/6 mx-4">
            <Image src={image5} alt={`Image 5`} width={300} height={300} />
          </div>
          <div className="w-1/6 mx-4">
            <Image src={image6} alt={`Image 6`} width={300} height={300} />
          </div>
      </div>
      <div style={{fontFamily: "Helvetica"}}>
        <h1 className=" text-center font-bold text-5xl my-6" >
          <Image src={highlight} alt="Underline" width={50} height={50} className="ml-auto" style={{marginRight: '470px'}}/>
            What they said about <span className="font-bold text-5xl text-main-purple">Uventlo</span>
        </h1>
        <Image src={quotes} alt="Quotes" width={999} height={999} className="my-10 mx-auto" style={{width: '1036px' , height: '284px'}}/>
      </div>
      <div>
        <h1 className=" text-center font-bold text-5xl my-6">
          Events by <span className="font-bold text-5xl text-main-purple">Uventlo</span>
        </h1>
      </div>
      <div className="flex justify-center flex-wrap gap-8 m-6">
          {items.map((item) => (
            <div key={item} className="w-1/4 rounded-lg shadow-lg p-6 h-96" style={{backgroundColor: "#FCF8FF"}}>
              <div className="flex items-center mb-4">
                <Image src={event} alt={`Event`} width={100} height={100} style={{width: '80%'}}/>
                <p className="ml-4">Mini Text</p>
              </div> 
                <p>Text 1</p>
                <p>Text 2</p>
                <p>Text 3</p>
              <div className="flex items-center mt-4">
                <span className="mr-2">Icon</span>
                <span>Number of People</span>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </main>
  );
}
