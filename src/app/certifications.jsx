import { Link } from "rasengan";
import logo from "@assets/logo.svg";
import Image from "@rasenganjs/image";
import default_image from "../assets/i2.jpeg";
import default_image2 from "../assets/OIP.jpeg";
import default_image3 from "../assets/R2.jpeg";
import CertificationCard from "@/components/certifications/CertificationCard";
const Certifications = () => {
  const certifications = [
    {
      image: default_image,
      title: "ReactJS Developer",
      issuer: "TechDiscov",
      date: "09/07/2024",
    },
    {
      image: default_image,
      title: "DJANGO Developer",
      issuer: "TechDiscov",
      date: "09/07/2024",
    },
    {
      image: default_image,
      title: "Javascript Full Course",
      issuer: "TechDiscov",
      date: "09/07/2024",
    },
    {
      image: default_image,
      title: "HTML, CSS, JS",
      issuer: "TechDiscov",
      date: "09/07/2024",
    },
  ];
  return (
    <section className="   justify-center flex-wrap gap-20 w-full h-full  flex  items-center py-8 px-[20px] md:px-[50px] xl:px-[7%] ">
      {certifications.map((item, index) => (
        <CertificationCard
          key={item.index}
          image={item.image}
          title={item.title}
          issuer={item.issuer}
          date={item.date}
        />
      ))}
    </section>
  );
};

Certifications.path = "/certifications";
Certifications.metadata = {
  title: "Home",
  description: "Home page",
};

export default Certifications;
