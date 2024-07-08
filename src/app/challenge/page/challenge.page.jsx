import { Link } from "rasengan";
import logo from "@assets/logo.svg";
import Image from "@rasenganjs/image";
import Landing from "@/components/landing/Landing";
import ChallengeCard from "@/components/challengeCard/ChallengeCard";

const Challenge = () => {
  return (
    <section className="w-full h-full  flex flex-col items-center py-8 px-[20px] md:px-[50px] xl:px-[200px] font-comfortaa">
     <ChallengeCard />
    </section>
  );
};

Challenge.path = "/challenge";
Challenge.metadata = {
  title: "Challenge", 
  description: "Challenge page",
};

export default Challenge;