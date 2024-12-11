import { useState } from "react";
import { motion } from 'framer-motion';

/* eslint-disable react/prop-types */
function TaskContainer({ direction, className }) {
  const [List, setList] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="relative  top-12 left-20 w-[441px] h-[452px] rounded-full border-2 border-transparent  ">

      {List.map(item=>{
        return(
          <motion.div
          style={{ transformOrigin: "125px 273px", rotate: `${-item*30 }deg` , translate:'-113px' }}
          className="absolute left-[100px] -top-[56px] z-50"
          initial={{  width: 0  }}
          whileInView={{  width:'250px' }}
          transition={{delay:0.7}}  
        >
          <div
            style={{ rotate: `${item*30 }deg`  }}
            className={` h-[65px] bg-white rounded-[8px] flex overflow-hidden items-center flex-row-reverse ${
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
        </motion.div>
        )
      })}


      {List.map(item=>{
        return(
          <motion.div
          style={{ transformOrigin: "125px 273px", rotate: `${item*30 }deg` , translate:'100px' }}
          className="absolute left-[100px] -top-[56px] z-50"
          initial={{  width: 0  }}
          whileInView={{  width:'250px' }}
          transition={{delay:0.7}} 
        >
          <div
            style={{ rotate: `${-item*30 }deg`  }}
            className={` h-[65px] bg-white rounded-[8px] flex overflow-hidden items-center ${
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
        </motion.div>
        )
      })}



    </div>
  )



}

export default TaskContainer;
