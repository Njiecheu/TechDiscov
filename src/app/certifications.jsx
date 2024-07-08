import { Link } from "rasengan";
import logo from "@assets/logo.svg";
import Image from "@rasenganjs/image";
import default_image from "../assets/default-image.png";
import CertificationCard from "@/components/certifications/CertificationCard";
const Certifications = () => {
  const certifications = [
    {
      image: default_image,
      title: "Titre",
      issuer: "ASSONFACK Beral",
      date: "21/072005",
    },
  ];
  return (
    <section className="w-full h-full  flex flex-col items-center py-8 px-[20px] md:px-[50px] xl:px-[7%] ">
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
