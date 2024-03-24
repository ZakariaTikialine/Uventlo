import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Wave from "@/components/wave";
import Image from "next/image";
import underline from "../../public/assets/images/underline.svg";
import woman from "../../public/assets/images/woman.svg"
import mainEllipse from "../../public/assets/images/mainEllipse.svg";
import highlight from "../../public/assets/images/highlight.svg";
import image1 from "../../public/assets/images/image1.svg";
import image2 from "../../public/assets/images/image2.svg";
import image3 from "../../public/assets/images/image3.svg";
import image4 from "../../public/assets/images/image4.svg";
import image5 from "../../public/assets/images/image5.svg";
import image6 from "../../public/assets/images/image6.svg";
import quotes from "../../public/assets/images/Quotes.svg";
import event from "../../public/assets/images/event.svg";
import Woman2 from "../../public/assets/images/Woman2.svg";
import Man from "../../public/assets/images/Man.svg";
import circle from "../../public/assets/images/circle.svg";
import rectangle from "../../public/assets/images/Rectangle.svg";
import ellipse from "../../public/assets/images/Ellipse.svg";
import polygon1 from "../../public/assets/images/Polygon 1.svg";
import polygon2 from "../../public/assets/images/Polygon 2.svg";
import { FaUsers , FaAngleDoubleRight , FaArrowCircleRight} from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const items = [1, 2, 3, 4, 5, 6];
  const items2 = [1, 2, 3, 4];

  return (
    <main>
      <NavBar />
      <div className="mt-16 relative">
        <h1 className=" text-center font-bold text-7xl mt-6" style={{fontFamily: "Helvetica"}}>
          Effortlessly Manage Your <span className="font-bold text-7xl text-main-purple">Events.</span>
          <Image src={underline} alt="Underline" width={240} height={2} className="ml-auto mr-72"/>
        </h1>
        <h1 className=" text-center font-bold text-7xl mb-6">From start to Finish</h1>
        <Image src={circle} alt="circle" width={600} height={400} className="absolute -top-16 left-1/3 -z-10"/>
      </div>
      <div className="flex justify-center z-10 relative">
        <Image src={rectangle} alt="Rectangle" width={85} height={85} className="absolute left-48 top-48" />
        <Image src={polygon2} alt="Polygon2" width={90} height={90} className="absolute top-72" style={{left: '25%'}}/>
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
        <Image src={ellipse} alt="Ellipse" width={85} height={85} className="absolute right-80 top-72" />
        <Image src={polygon1} alt="Polygon1" width={85} height={85} className="absolute top-56" style={{right: '28%'}} />
        <Image src={rectangle} alt="Rectangle" width={85} height={85} className="absolute right-40 top-72" />
      </div>
      <Wave />
      <div style={{background: 'linear-gradient(to bottom, #777AFF, #fff)', height: '729px', width: '100%'}}>
        <div className="text-center text-white text-wrap text-5xl pt-16 flex items-center relative" style={{fontFamily: "Helvetica"}}><FaArrowCircleRight className="absolute top-16 left-20 w-8"/> <p>Plan , Promote, and execute flawless events with our intuitive event managment software</p></div>
        <div className="flex justify-center mt-16 mx-8 gap-4">
          {items2.map((item) => (
            <div key={item} className="w-1/4 bg-gray-300 rounded-lg shadow-lg p-6 " style={{height : '400px'}}>
            </div>
          ))}
        </div>
      </div>
      <div style={{fontFamily: "Helvetica"}}>
        <h1 className=" text-center font-bold text-5xl my-6" >
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
            <div key={item} className="w-1/4 rounded-lg shadow-lg p-6" style={{backgroundColor: "#FCF8FF"}}>
              <div className="flex items-center justify-center mb-4 mt-2 relative">
                <Image src={event} alt={`Event`} width={100} height={100} style={{width: '95%'}}/>
                <p className="ml-4 absolute bg-white p-2 rounded-lg top-3 left-2 font-semibold text-l text-main-purple">FREE</p>
              </div> 
              <div className="relative">
                <p className="text-base font-semibold">BestSeller byteCraft bootcamp - write, Market & Publish Your Book -Lucknow</p>
                <p className="text-main-purple text-base">Saturday, March 18, 9:30 AM</p>
                <p className="text-base text-slate-500">Online event - Attend anywhere</p>
                <div className="text-slate-500 text-sm flex items-center gap-1">
                  <u>Learn more</u>
                  <FaAngleDoubleRight/>
                </div>
                <div className="flex-column justify-center bottom-4 right-3 absolute font-bold">
                  <FaUsers className="mx-auto w-8"/>
                  <p>200</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex-column my-6 relative">
        <h1 className="text-center text-5xl font-bold text-wrap pt-32">Tired of Event management</h1>
        <h1 className="text-center text-5xl font-bold text-wrap pb-3">Headaches ?</h1>
        <p className="text-center text-wrap pt-3 text-2xl">Simplify your planning with Uventlo’s intuitive platform. Manage gusts list, automate</p>
        <p className="text-center text-wrap pb-8 text-2xl">emails, and gain valuable insights. syart your free trial today!</p>
        <div className="flex justify-center mt-8 mb-32">
          <Link href="/" className="px-4 py-6 items-center flex justify-center rounded-lg" style={{ width: '189px', height: '61px', border: '2px solid #724FFF', opacity: '0px', textAlign: 'center' }}>
              <span className='font-sans text-base font-medium leading-6 text-center' style={{color: '#724FFF'}}>Create Event</span>
          </Link>
        </div>
        <Image src={Woman2} alt="Woman" width={450} height={450} className="absolute -bottom-32 right-0"/>
        <Image src={Man} alt="Man" width={280} height={450} className="absolute -bottom-32 left-8"/>
        <Image src={circle} alt="circle" width={600} height={400} className="absolute -top-8 left-1/3 -z-10"/>
      </div>
      <Footer />
    </main>
  );
}
