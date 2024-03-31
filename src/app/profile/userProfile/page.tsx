import Description from "@/components/userProfile/Description";
import ImagesContainer from "@/components/userProfile/ImagesContainer";
import Location from "@/components/userProfile/Location";
import MediaLinks from "@/components/userProfile/MediaLinks";
import WorkingHours from "@/components/userProfile/WorkingHours";
import profileImage from "../../../../public/assets/images/profileImage.jpg";

function UserProfilePage() {
  return (
    <section className=" bg-main-gray flex flex-col gap-4 p-4">
      <div>
        <ImagesContainer canEdit={true} />
      </div>
      <div className=" flex gap-4 flex-1 ">
        <div className=" w-[58%] flex flex-col gap-4">
          <Description />
          <MediaLinks />
        </div>
        <div className=" w-[42%] flex flex-col gap-4">
          <Location />
          <WorkingHours />
        </div>
      </div>
    </section>
  );
}

export default UserProfilePage;
