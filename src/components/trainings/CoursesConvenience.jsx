function CoursesConvenience({ icon, title, subTitle }) {
  return (
    <div className="flex flex-col justify-center items-center gap-1 max-w-[200px] ">
      <span className="material-icons text-[35px] text-white ">{icon}</span>
      <span className="text-white text-[18px] font-bold text-center ">
        {title}
      </span>
      <span className="text-[17px] text-white font-thin text-center">
        {subTitle}
      </span>
    </div>
  );
}

export default CoursesConvenience;
