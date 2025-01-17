import Image from "@rasenganjs/image";
import profile from "@assets/default-image.png";
import { Link } from "rasengan";
import student_image from "@assets/student.jpeg";
function Hero() {
  return (
    <section className="  bg-gray w-full my-14  flex flex-col-reverse  sm:flex-row gap-8 md:justify-between  items-center  pb-14 md:py-8  px-[5%] md:px-[7%] xl:px-[7%] ">
      <div className="font-normal flex-1 ">
        <p className="relative text-[30px] text-gray-700 md:text-[50px] leading-[40px] md:leading-[60px] font-bold ">
          The future of Tech is Here
          <div className="absolute top-0 text-cover w-full bg-gray "></div>
        </p>
        <p className="text-gray-500">
          Discover young talents and tech passionates
        </p>

        <div className="flex mt-8 md:mt-5">
          <Link
            to="https://calendly.com/beral-assaf/30min"
            className="group relative w-[200px]  h-[52px] bg-primary rounded-md  text-white font-medium cursor-pointer overflow-hidden"
          >
            <ul className="absolute w-full left-1/2 top-0 group-hover:top-[-52px] ease-in duration-[300ms] -translate-x-1/2 text-[20px] leadings-[20px] ">
              <li className="relative flex items-center justify-center text-center h-[52px]">
                Get started
                <div className="absolute top-0 text-cover w-full bg-primary "></div>
              </li>
              <li className=" flex items-center justify-center text-center text-white h-[52px]">
                Let's go !
              </li>
            </ul>
            <div className="absolute light group-hover:hidden size-[300px] top-[-50px] left-[-50px] rounded-[50%] "></div>
          </Link>
        </div>
      </div>
      <div id="hero-image" className="relative  flex-1  overflow-hidden ">
        <Image
          src={student_image}
          alt="profile picture"
          className="object-cover z-10 !size-[200px] md:!size-[300px] grayscale-0 rounded-md "
        />
        <div className="absolute z-0 top-5 left-5 !size-[200px] md:!min-h-[300px] md:!min-w-[300px] grayscale-0 rounded-md bg-primary "></div>
      </div>
    </section>
  );
}

export default Hero;
