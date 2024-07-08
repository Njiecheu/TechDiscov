import { Link } from "rasengan";
function CertificationCard({ image, title, category, issuer, date }) {
  return (
    <div className="group flex flex-col gap-2 p-2 w-[250px] rounded-md bg-[#f5f5f4] border border-[#cbd5e1] overflow-hidden shadow-sm">
      <div className=" h-[150px] w-full rounded-md overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-md group-hover:scale-[1.06] duration-300 ease-in-out "
        />
      </div>
      <div className="px-2 flex flex-col justify-between text-ellipsis  ">
        <p className="text-sm">{category}</p>
        <h1 className="text-[18px] font-bold mb-2  line-clamp-2 ">{title}</h1>
        <div className="flex justify-between text-sm px-2">
          <span>{issuer}</span>
          <span>{date}</span>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-1 text-[15px] font-bold">
        <Link
          to="/"
          className="flex justify-center py-3 w-full text-white   bg-primary hover:bg-gray-50 hover:text-primary hover:border-2  border border-[#cbd5e1] hover:border-primary rounded-md"
        >
          Start Now
        </Link>
      </div>
    </div>
  );
}

export default CertificationCard;
