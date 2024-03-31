import ImagesContainer from "@/components/userProfile/ImagesContainer";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import EventCard from "@/components/EventCard";
import Image from "next/image";

interface Icons {
  [key: string]: JSX.Element;
}

function page({ params }: { params: { profileId: string } }) {
  const icons: Icons = {
    facebook: <FaFacebook />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />,
    linkedin: <FaLinkedin />,
    youtube: <FaYoutube />,
  };

  const userProfile = {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda, maxime ut ipsum quos temporibus repellendus officia quibusdam, exercitationem esse voluptatibus. Rerum sunt dicta iure repudiandae corporis sed ducimus sapiente amet? Itaque excepturi maiores ut amet totam voluptatem. Provident excepturi nihil facere perferendis magnam ut eligendi accusamus, at ipsum molestias.",
    workinHours: [
      {
        day: "Wednsday",
        hours: {
          from: "7PM",
          to: "10PM",
        },
      },
      {
        day: "Sunday",
        hours: {
          from: "7PM",
          to: "10PM",
        },
      },
    ],
    contact: "random link uWu",
    location: {
      map: "/random/x/and/y/points",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis aperiam porro nemo?",
    },
    socialMedia: [
      { type: "facebook", link: "random link" },
      { type: "twitter", link: "random link" },
      { type: "instagram", link: "random link" },
      { type: "linkedin", link: "random link" },
      { type: "youtube", link: "random link" },
    ],
    events: [
      {
        title: "Event 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis aperiam porro nemo?",
        date: "12/12/2022",
        time: "7PM",
        location: "random location",
        image: "/random/image",
        id: "random id",
      },
      {
        title: "Event 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis aperiam porro nemo?",
        date: "12/12/2022",
        time: "7PM",
        location: "random location",
        image: "/random/image",
        id: "random id",
      },
      {
        title: "Event 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis aperiam porro nemo?",
        date: "12/12/2022",
        time: "7PM",
        location: "random location",
        image: "/random/image",
        id: "random id",
      },
      {
        title: "Event 4",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis aperiam porro nemo?",
        date: "12/12/2022",
        time: "7PM",
        location: "random location",
        image: "/random/image",
        id: "random id",
      },
      {
        title: "Event 5",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis aperiam porro nemo?",
        date: "12/12/2022",
        time: "7PM",
        location: "random location",
        image: "/random/image",
        id: "random id",
      },
      {
        title: "Event 6",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis aperiam porro nemo?",
        date: "12/12/2022",
        time: "7PM",
        location: "random location",
        image: "/random/image",
        id: "random id",
      },
    ],
  };
  return (
    <main className=" container mx-auto px-4">
      <ImagesContainer canEdit={false} />
      <div className=" px-20 flex gap-6 py-6">
        <div className=" flex-2 flex flex-col gap-3">
          <h1 className=" font-bold text-2xl">Description</h1>
          <p className=" text-gray-600 my-2">{userProfile.description}</p>
          <h1 className=" text-2xl font-bold">Hours</h1>
          {userProfile.workinHours.map((hour) => (
            <p className=" text-gray-600">
              {hour.day} :{" "}
              <span className=" font-semibold text-main-purple">
                {" "}
                {hour.hours.from} - {hour.hours.to}{" "}
              </span>
            </p>
          ))}
          <h1 className=" text-2xl font-bold">Organizer Contact</h1>
          <p className=" text-gray-600">
            Please go to{" "}
            <a
              className=" transition-all duration-500 hover:font-bold text-main-purple"
              href={userProfile.contact}
            >
              this link
            </a>{" "}
            to know more
          </p>
        </div>
        <div className=" flex-1 flex flex-col gap-3">
          <h1 className=" text-2xl font-bold">Event Location</h1>
          <Image
            src={userProfile.location.map}
            width={100}
            height={100}
            alt="map"
          />

          <p className=" text-gray-600">{userProfile.location.description}</p>
          <h1 className=" text-2xl font-bold">Share with friends</h1>
          <div className=" flex items-center gap-4">
            {userProfile.socialMedia.map(
              (social, index) =>
                social.link && (
                  <div
                    key={index}
                    className=" text-main-purple h-[50px] w-[50px] bg-main-gray flex items-center justify-center rounded-xl text-3xl "
                  >
                    <a href={social.link}>{icons[social.type]}</a>{" "}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <div className=" px-20 py-10">
        <h1 className="text-2xl font-bold mb-8">Orgnizer's Events</h1>
        <div className=" flex items-center justify-center flex-wrap gap-4">
          {userProfile.events.slice(0, 4).map((event) => (
            <EventCard event={event} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default page;
