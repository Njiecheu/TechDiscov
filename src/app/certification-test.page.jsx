import { Link } from "rasengan";
import logo from "@assets/logo.svg";
import Image from "@rasenganjs/image";

const CertificationTest = () => {
  return (
    <section className="w-full h-full  flex flex-col items-center py-8 px-[20px] md:px-[50px] xl:px-[200px] font-comfortaa">
      <h1 className="text-[50px] font-bold justify-center py-5 ">
        Software Engineer Certification
      </h1>
      <div>
        <h2 className="text-[25px] font-bold ">
          1. How do we declare a component in ReactJs?
        </h2>
        <div className="flex text-[18px] gap-5 pl-10 my-5   ">
          <ul className="flex flex-col gap-1">
            <li>
              <input className="" type="radio" name="q1" />
              .jsx
            </li>
            <li>
              <input className="" type="radio" name="q1" />
              .tsx
            </li>
            <li>
              <input className="" type="radio" name="q1" />
              .jar
            </li>
            <li>
              <input className="" type="radio" name="q1" />
              .js
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-[25px] font-bold ">
          2. How do we declare a component in ReactJs?
        </h2>
        <div className="flex text-[18px] gap-5 pl-10 my-5   ">
          <ul className="flex flex-col gap-1">
            <li>
              <input className="" type="radio" name="q2" />
              .jsx
            </li>
            <li>
              <input className="" type="radio" name="q2" />
              .tsx
            </li>
            <li>
              <input className="" type="radio" name="q2" />
              .jar
            </li>
            <li>
              <input className="" type="radio" name="q2" />
              .js
            </li>
          </ul>
        </div>
      </div>
      <div className="relative w-full my-5  h-[1px] bg-primary">
        <div className=" absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 bg-white">
          <button className="bg-primary text-white rounded-md py-2 px-5">
            Submit
          </button>{" "}
        </div>
      </div>
    </section>
  );
};

CertificationTest.path = "/certif-test";
CertificationTest.metadata = {
  title: "CertificationTest",
  description: "Certification Test page",
};

export default CertificationTest;
