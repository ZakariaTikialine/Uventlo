import Image from "next/image";
import Link from "next/link";

interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  id: string;
}

function EventCard({ event }: { event: Event }) {
  // {
  //     title: "Event 1",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis aperiam porro nemo?",
  //     date: "12/12/2022",
  //     time: "7PM",
  //     location: "random location",
  //     image: "random image",
  //   },
  return (
    <div className=" shadow-sm bg-white p-4 rounded-xl flex flex-col gap-2">
      <Image
        className=" rounded-lg bg-cover "
        src={event.image}
        alt="event image"
        width={200}
        height={200}
      />
      <div>
        <h1 className=" font-semibold">{event.title}</h1>
        <p className=" text-main-purple">
          {event.date} / {event.time}
        </p>
        <p className=" text-gray-600 text-sm">{event.location}</p>
      </div>

      <Link
        className=" text-sm underline underline-offset-2 text-gray-700"
        href={`/event/${event.id}`}
      >
        Learn more {">>"}
      </Link>
    </div>
  );
}

export default EventCard;
