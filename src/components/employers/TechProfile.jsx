import Image from "@rasenganjs/image";
import profile from "@assets/default-image.png";
import { Link } from "rasengan";
function TechProfile() {
  return (
    <div className="flex flex-col relative gap-1 pt-9 px-5 pb-2 border w-[400px]  rounded-xl bg-white hover:bg-[#eff6ff]  shadow-sm hover:shadow-xl scale-[1] hover:scale-[1.03] transition-[1s] ease-in-out cursor-pointer ">
      <div className="absolute top-0 -translate-y-1/2 left-10 size-[50px] xl:size-[50px] ">
        <Image
          src={profile}
          alt="profile picture"
          className="object-cover !size-full  rounded-full grayscale-0 border border-primary "
        />
      </div>
      <div className="bg-white border border-gray-300 hover:border-primary transition-500 flex items-center justify-center rounded-full absolute top-4 translate-y-1/2 right-3 p-2  cursor-pointer">
        <span className="material-icons-outlined text-primary ">message</span>
      </div>
      <div>
        <p className="font-bold text-gray-950 ">ASSONFACK BERAL</p>
        <p className="text-gray-400 w-[200px] text-ellipsis line-clamp-1">
          Software Engineer
        </p>
        <Link
          to="/https://assaf-portfolio.vercel.app"
          className="text-primary mt-10 font-bold"
        >
          Visit Portfolio
        </Link>
        <p className="text-gray-500 mt-3 text-ellipsis line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          perferendis fuga? Sapiente quidem, officiis soluta officia illo,
          aperiam nostrum porro, inventore accusantium exercitationem id
          tempora. Eligendi officia dolores doloremque distinctio.
        </p>
        <div className=" flex mt-6 justify-around items-center gap-7">
          <div className="flex flex-col items-center justify-center">
            <span className=" font-bold text-xl">13</span>
            <span className="text-[13px] text-gray-500">Certifications</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className=" font-bold text-xl">20</span>
            <span className="text-[13px] text-gray-500">Challenges</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span>
              <span className=" font-bold text-xl mr-1 ">3.5</span>
              <span className="text-[13px] text-gray-500">/5</span>
            </span>
            <span className="text-[13px] text-gray-500">Ratings (24) </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechProfile;
