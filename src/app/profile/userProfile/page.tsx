import ImagesContainer from "@/components/userProfile/ImagesContainer";
import Location from "@/components/userProfile/Location";
import MediaLinks from "@/components/userProfile/MediaLinks";
function page() {
  return (
    <section className=" flex flex-col gap-8 p-4">
      <div>
        <ImagesContainer />
      </div>
      <div>
        <div>
          <Location />
        </div>
        <div>
          <MediaLinks />
        </div>
      </div>
    </section>
  );
}

export default page;
