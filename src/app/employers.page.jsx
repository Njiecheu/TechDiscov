import { Link } from "rasengan";
import logo from "@assets/logo.svg";
import Image from "@rasenganjs/image";
import Hero from "@/components/employers/Hero";
import TechProfile from "@/components/employers/TechProfile";

const Employers = () => {
  return (
    <section className="w-full h-full  flex flex-col items-center py-4 px-[20px] md:px-[50px] xl:px-[50px] ">
      <Hero />
      <section className="px-[5%] py-12 flex justify-center gap-12 flex-wrap ">
        <TechProfile />
        <TechProfile />
        <TechProfile />
        <TechProfile />
      </section>
      <div className="relative w-full my-5  h-[1px] bg-primary">
        <div className=" absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 bg-white">
          <button className="bg-primary text-white rounded-md py-2 px-5">
            See More
          </button>{" "}
        </div>
      </div>
    </section>
  );
};

Employers.path = "/employers";
Employers.metadata = {
  title: "Employers Page",
  description: "Browse profiles from all over the world!",
};

export default Employers;
