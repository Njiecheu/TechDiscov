import { Link } from "rasengan";
import logo from "@assets/logo.svg";
import Image from "@rasenganjs/image";
import Landing from "@/components/landing/Landing";

const Home = () => {
  return (
    <section className="w-full h-full  flex flex-col items-center py-8 px-[20px] md:px-[50px] xl:px-[200px] font-comfortaa">
     <Landing />
    </section>
  );
};

Home.path = "/";
Home.metadata = {
  title: "Home",
  description: "Home page",
};

export default Home;
