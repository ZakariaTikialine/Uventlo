import Image from "next/image";
import profileImg from "../../../public/assets/images/profileImage.jpg";

function ImagesContainer({ canEdit }: { canEdit: Boolean }) {
  const userInfo = {
    name: "Didou Boutobba",
    type: "Tech & Shit",
    location: "Khenchela, Algeria",
    profileImg: profileImg,
    coverImg: null,
  };
  return (
    <section className=" rounded-xl p-3 bg-white">
      <div className=" w-full h-[200px] bg-red-300 rounded-lg">
        {userInfo?.coverImg ? (
          <Image
            src={userInfo?.coverImg || ""}
            alt="profile image"
            height={200}
            width={200}
            className=" w-full rounded-lg"
          />
        ) : null}
      </div>
      <div className=" flex gap-8 relative ml-24 p-4">
        <div className=" absolute left-0 top-[-40px] mb-4  rounded-full bg-green-300 w-[140px] h-[140px]">
          {userInfo?.profileImg ? (
            <Image
              src={userInfo?.profileImg || ""}
              alt="profile image"
              height={140}
              width={140}
              className=" w-full rounded-full"
            />
          ) : null}
        </div>

        <div className=" flex-1 text-left ml-[150px]">
          <h1 className=" text-2xl font-bold">{userInfo?.name}</h1>
          <p className=" text-gray-700">{userInfo?.type}</p>
          <p className=" text-sm text-gray-600">{userInfo?.location}</p>
        </div>
      </div>
    </section>
  );
}

export default ImagesContainer;
