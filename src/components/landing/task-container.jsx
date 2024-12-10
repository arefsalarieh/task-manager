/* eslint-disable react/prop-types */
function TaskContainer({ direction , className}) {
  return (
    <div
      className={`w-[250px] h-[65px]  relative z-40 bg-white rounded-[8px] flex overflow-hidden items-center ${
        direction === "left" ? "" : "flex-row-reverse"
      } ${className}`}
    >
      <div className="w-[30px] h-full bg-[#F42495] text-white flex justify-center items-center">
        <p className="transform rotate-[-90deg]">یکشنبه</p>
      </div>
      <h2 className="text-black text-center w-[140px]">
        متن توضیحات متن توضیحات تسک
      </h2>
    </div>
  );
}

export default TaskContainer;
