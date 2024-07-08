import { Link } from "rasengan";
import logo from "@assets/logo.svg";
import Image from "@rasenganjs/image";
import CoursesConvenience from "@/components/trainings/CoursesConvenience";
const conveniences = [
  {
    icon: "trending_up",
    title: "Track Your Learning",
    subTitle: "Learn in weeks, not semesters",
  },
  {
    icon: "workspace_premium",
    title: "Effortless Upskilling",
    subTitle: "Get certified without the classroom hassle",
  },
  {
    icon: "local_library",
    title: "Learn on the Go",
    subTitle: "Access courses anytime, anywhere",
  },
  {
    icon: "devices",
    title: "No Commute, All Gain",
    subTitle: "Train from the comfort of your home",
  },
];
// categories=[
//     Web Development
// ]
const Trainings = () => {
  return (
    <section className="w-full h-full  flex flex-col items-center py-8  ">
      <div className="flex px-[20px] md:px-[50px] xl:px-[100px]">
        <div className="flex-1">
          <h1 className="text-[50px] font-bold text-gray-700 ">
            {" "}
            Level up your skills with a list of updated courses
          </h1>
          <p className="text-gray-500 text-[20px] ">
            Learn from industry leaders and get hands-on practice
          </p>
          <button className="px-6 py-3 rounded-md mt-8 bg-primary text-white font-bold">
            Get suggestions from AI
          </button>
        </div>

        <div className="flex-1">{}</div>
      </div>
      <div className=" w-full flex justify-center bg-primary my-[100px] py-5  gap-[50px] flex-wrap">
        {conveniences.map((item, index) => (
          <CoursesConvenience
            key={index}
            icon={item.icon}
            title={item.title}
            subTitle={item.subTitle}
          />
        ))}
      </div>
    </section>
  );
};

Trainings.path = "/trainings";
Trainings.metadata = {
  title: "Trainings",
  description: "Trainings page",
};

export default Trainings;
