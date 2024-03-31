import Image from 'next/image';
import vector from '/public/assets/images/vector.svg';
import { FaTicketAlt , FaUser , FaPhoneAlt ,FaCopy} from 'react-icons/fa';
import codeBar from '/public/assets/images/codeBar.svg';

const page = () => {
    return (
      <div className="bg-[#E9E9FF] w-full h-full p-[40px] flex flex-col gap-[40px]">
        <section className="bg-white  rounded-xl flex flex-col items-center">
          <button className='flex flex-row justify-center items-center mt-[20px] border-[1px] border-[#724FFF] rounded-[5px]'>
            <h1 className="font-semi text-gray-400 px-2">Ticket type : |</h1>
            <select title="select" className="h-[40px] rounded-[5px] mr-2 font-semibold border-none cursor-pointer">
              <option value="1" className='p-2'>Spectator</option>
              <option value="2" className='p-2'>Organizer</option>
              <option value="3" className='p-2'>Family member</option>
            </select>
          </button>
          <div className="border border-[#724FFF] my-[20px] w-[80%]" />
          <div className="flex flex-row gap-[150px]">
            <div className="flex flex-col w-[450px] p-[10px] relative">
              <form>
                <label htmlFor="">
                  <h1 className='font-semibold'>Ticket Headline</h1>
                </label>
                <input type="text" title="headline" placeholder="Ticket Headline" className='border border-[#724FFF] w-full h-[50px] my-[10px] rounded-md p-2'/>
                <label htmlFor="">
                  <h1 className='font-semibold'>Event adress</h1>
                </label>
                <input type="text" title="headline" placeholder="Event adress" className='border border-[#724FFF] w-full h-[50px] my-[10px] rounded-md p-2'/>
                <label htmlFor="">
                  <h1 className='font-semibold'>Ticket reservation link</h1>
                </label>
                <input type="text" title="headline" placeholder="https://www.eventname.uventlo.com/index.php" className='border border-[#724FFF] w-full h-[50px] mt-[10px] rounded-md p-2'/>
              </form>
              <FaCopy className='absolute cursor-pointer bottom-[66px] right-[33px]'/>
            </div>
            <div className='flex flex-col p-[30px] relative'>
              <Image src={vector} alt="ticket" width={450} height={150} />
              <div className='flex flex-col absolute top-[45px] left-[52px] items-center'>
                <p className='text-xs text-white py-2'>
                  Ticket type : <span className='font-bold'>Spectator</span>
                </p>
                <Image src={codeBar} alt="ticket" width={130} height={50} />
              </div>
              <div className='flex flex-col gap-2 absolute top-[50px] left-[222px] text-white text-sm'>
                <p className='font-semibold text-xl'>Ticket title</p>
                <p>by : @organizer</p>
                <p>Full name : Samir mol la salle</p>
                <p>lightWeightBaby@wegogym.dz</p>
                <p>Date : 17-05-2004</p>
                <p>Event adress : Blida 09</p>
              </div>
              <div className='flex flex-row p-[20px] items-center'>
                <p className='font-bold text-lg'>Ticket Color</p>
                <input type="color" name="" id="" className='mx-4'/>
                <p className='text-sm'>(Click on the box to change color)</p>
              </div>
            </div>
          </div>
          <div>
            <p className='text-gray-400 px-[30px] pb-[30px]'>
            This link will direct your costumers into a page that is dedicated for the reservation for your event, for privacy concerns, please check our <u className='text-[#724FFF]'>terms of use & privacy</u>
            </p>
          </div>
        </section>
        <section  className="bg-white  rounded-xl">
          <div className='flex flex-row justify-around'>
            <div className='flex flex-col p-2'>
              <p className='flex flex-row items-center gap-3 text-center'><FaUser/>Guest</p>
              <div className="border border-gray-400 my-[5px] w-[100%]" />
              <p className='text-center'>cheb khaled</p>
            </div>
            <div className='flex flex-col p-2'>
              <p className='flex flex-row items-center gap-3 text-center'><FaTicketAlt/>Ticket type</p>
              <div className="border border-gray-400 my-[5px] w-[100%]" />
              <p className='text-center'>VIP</p>
            </div>
            <div className='flex flex-col p-2'>
              <p className='text-center'>Date</p>
              <div className="border border-gray-400 my-[5px] w-[100%]" />
              <p className='text-center'>17-05-2024</p>
            </div>
            <div className='flex flex-col p-2'>
              <p className='text-center'>Email</p>
              <div className="border border-gray-400 my-[5px] w-[100%]" />
              <p className='text-center'>khaled@vip.dz</p>
            </div>
            <div className='flex flex-col p-2'>
              <p className='flex flex-row items-center gap-3 text-center'><FaPhoneAlt/>Phone</p>
              <div className="border border-gray-400 my-[5px] w-[100%]" />
              <p className='text-center'>911</p>
            </div>
            <div className='flex flex-col p-2'>
              <p className='text-center'>ID</p>
              <div className="border border-gray-400 my-[5px] w-[100%]" />
              <p className='text-center'>11110000</p>
            </div>
          </div>
        </section>
      </div>
    );
  };


export default page;