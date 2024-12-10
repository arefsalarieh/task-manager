import { useState } from "react";

/* eslint-disable react/prop-types */
function TaskContainer({ direction, className }) {
  const [List, setList] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="relative  top-12 left-20 w-[441px] h-[452px] rounded-full border-2 border-transparent  ">

      {List.map(item=>{
        return(
          <div
          style={{ transformOrigin: "125px 273px", rotate: `${-item*30 }deg` , translate:'-113px' }}
          className="absolute left-[100px] -top-[56px] z-50"
        >
          <div
            style={{ rotate: `${item*30 }deg`  }}
            className={`w-[250px] h-[65px] bg-white rounded-[8px] flex overflow-hidden items-center flex-row-reverse ${
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
        </div>
        )
      })}


      {List.map(item=>{
        return(
          <div
          style={{ transformOrigin: "125px 273px", rotate: `${item*30 }deg` , translate:'100px' }}
          className="absolute left-[100px] -top-[56px] z-50"
        >
          <div
            style={{ rotate: `${-item*30 }deg`  }}
            className={`w-[250px] h-[65px] bg-white rounded-[8px] flex overflow-hidden items-center ${
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
        </div>
        )
      })}
    </div>
  )


  // return (
  //   <motion.div
  //     className={`w-[250px] h-[65px] relative z-40 bg-white rounded-[8px] flex overflow-hidden items-center ${
  //       direction === "left" ? "origin-right" : "flex-row-reverse origin-left"
  //     } ${className}`}
  //     initial={{ rotate: -90, opacity: 0 }}
  //     animate={{
  //       rotate: direction === "left" ? [-90, 0, 5, -2, 0] : [90, 0, 5, -2, 0],
  //       opacity: [0, 1],
  //     }}
  //     transition={{
  //       rotate: {
  //         duration: 2,
  //         ease: "easeInOut",
  //         delay: ContainerDelay,
  //       },
  //       opacity: {
  //         duration: 2,
  //         ease: "easeInOut",
  //         delay: ContainerDelay,
  //       },
  //     }}
  //   >
  //     <motion.div
  //       className="w-[30px] h-full bg-[#F42495] text-white flex justify-center items-center"
  //       initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
  //       animate={{ opacity: 1, x: 0 }}
  //       transition={{
  //         type: "spring",
  //         stiffness: 50,
  //         damping: 25,
  //         delay: DateDelay,
  //       }}
  //     >
  //       <p className="transform rotate-[-90deg]">یکشنبه</p>
  //     </motion.div>
  //     <motion.h2
  //       className="text-black text-center w-[140px]"
  //       initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
  //       animate={{ opacity: 1, x: 0 }}
  //       transition={{
  //         type: "spring",
  //         stiffness: 50,
  //         damping: 25,
  //         delay: TitleDelay,
  //       }}
  //     >
  //       متن توضیحات متن توضیحات تسک
  //     </motion.h2>
  //   </motion.div>
  // );
}

export default TaskContainer;
